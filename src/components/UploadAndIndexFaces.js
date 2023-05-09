import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UploadAndIndexFaces = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [totalSize, setTotalSize] = useState(0);
  const [fileProgress, setFileProgress] = useState([]);
  const [fileStatus, setFileStatus] = useState([]);

  useEffect(() => {
    const size = files.reduce((acc, file) => acc + file.size, 0);
    setTotalSize(size);
    setFileProgress(files.map(() => 0));
    setFileStatus(files.map(() => 'Upando e indexando faces'));
  }, [files]);

  const handleFilesChange = (e) => {
    setFiles([...e.target.files]);
  };

  const uploadAndIndex = async () => {
    setUploading(true);
    setUploadedFiles(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file);

      try {
        await axios.post('https://g8u215y3f5.execute-api.us-east-1.amazonaws.com/uploadAndIndexFaces', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setFileProgress((prevProgress) => {
              const newProgress = [...prevProgress];
              newProgress[i] = percentCompleted;
              return newProgress;
            });
          },
        });

        setFileStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[i] = 'Sucesso!';
          return newStatus;
        });
        setUploadedFiles((prevCount) => prevCount + 1);
      } catch (error) {
        setFileStatus((prevStatus) => {
          const newStatus = [...prevStatus];
          newStatus[i] = 'Sem faces';
          return newStatus;
        });
      }
    }

    setUploading(false);
  };

  const progressBarColor = (status) => {
    switch (status) {
      case 'Sucesso!':
        return 'green';
      case 'Sem faces':
        return 'red';
      default:
        return 'blue';
    }
  };
  const totalSizeInGB = (totalSize / (1024 * 1024 * 1024)).toFixed(2);
  return (
    <div>
      <h1>Upload e Indexação de Faces</h1>
      <input type="file" multiple onChange={handleFilesChange} />
      <button onClick={uploadAndIndex} disabled={uploading}>
        Enviar Imagens
      </button>
      {uploading && (
        <div>
          <p>
          Carregando... {uploadedFiles}/{files.length}, {totalSizeInGB} GB
          </p>
          <div
            style={{
              maxHeight: '200px',
              overflowY: 'scroll',
              border: '1px solid',
              padding: '10px',
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>Nome do arquivo</th>
                  <th>Progresso</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {fileProgress.map((progress, index) => (
                  progress > 0 && (
                    <tr key={index}>
                                        <td>{files[index].name}</td>
                  <td>
                    <div
                      style={{
                        border: '1px solid',
                        backgroundColor: progressBarColor(fileStatus[index]),
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          width: `${progress}%`,
                          backgroundColor: 'rgba(255, 255, 255, 0.5)',
                          height: '20px',
                        }}
                      ></div>
                      <span
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '0',
                          transform: 'translate(-50%, 0)',
                          color: 'black',
                        }}
                      >
                        {progress}%
                      </span>
                    </div>
                  </td>
                  <td>{fileStatus[index]}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )}
</div>
);
};

export default UploadAndIndexFaces;
