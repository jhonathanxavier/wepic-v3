import React, { Fragment } from 'react'

function Index(){
    return(
        <Fragment>
            <>
  {/* Google Tag Manager (noscript) */}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W3CR8MV"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/* End Google Tag Manager (noscript) */}
  {/* <div className="page-loader">
    <div className="loader">
      <img style={{ width: 120 }} src="web/assets/img/mloader.svg" />
    </div>
  </div> */}
  <div id="main_content">
    {/*=========================*/}
    {/*=        Navbar         =*/}
    {/*=========================*/}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n            @media only screen and (max-width: 800px) {\n                .plus{\n                    display:none;\n                }\n                .desktop_visible{\n                    display:none;\n                }\n            }\n            @media only screen and (min-width: 801px) {\n                .mobile_visible{\n                    display:none;\n                }\n            }\n            \n        "
      }}
    />
    <header
      id="masthead"
      className="site-header header-7 header-width no-transition"
      data-header-fixed="true"
      data-mobile-menu-resolution={992}
    >
      <div className="container">
        <div className="header-inner">
          <nav id="site-navigation" className="main-nav visible">
            <div className="site-logo">
              <a href="index.html" rel="home">
                <img
                  style={{
                    WebkitFilter: "grayscale(0)",
                    filter: "none",
                    width: 150
                  }}
                  src="web/assets/img/sell-photos/mobile-wePic.png"
                  alt="UltraLand"
                  className="main-logo"
                />
                <img
                  style={{
                    WebkitFilter: "grayscale(0)",
                    filter: "none",
                    width: 175
                  }}
                  src="web/assets/img/sell-photos/wePic-logo.png"
                  className="logo-sticky"
                />
              </a>
            </div>
            <button
              className="mobile_visible"
              type="button"
              data-toggle="modal"
              data-target="#form"
              data-wow-delay=".9s"
              style={{
                color: "#051441",
                border: "2px solid #ccc",
                padding: "3px 10px",
                borderRadius: 4,
                backgroundColor: "#fff"
              }}
            >
              Em um toque
            </button>
            <div className="tt-hamburger" id="page-open-main-menu" tabIndex={1}>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </div>
            <div
              className="main-nav-container canvas-menu-wrapper"
              id="mega-menu-wrap"
            >
              <div
                className="close-menu page-close-main-menu"
                id="page-close-main-menu"
              >
                <i className="feather-x" />
              </div>
              <div className="menu-wrapper">
                <ul id="menu-primary-menu" className="menu">
                  <li>
                    <a href="index.html" className="menu-link">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html" className="menu-link">
                      <span>Preços</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.main-menu */}
              <div className="nav-right style1">
                <a href="index.html" className="nav-link">
                  <i className="feather-unlock" />
                  Login
                </a>
                <a href="index.html" className="nav-btn tt__btn btn-round">
                  Criar Evento
                </a>
              </div>
              {/* /.nav-right */}
            </div>
            {/* #menu-wrapper */}
          </nav>
          {/* #site-navigation */}
        </div>
        {/* /.header-inner */}
      </div>
      {/* /.container */}
    </header>
    {/* Hotjar Tracking Code for https://memzo.ai/ */}
    {/*modal*/}
    <div
      className="modal fade"
      id="form"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div
          className="modal-content"
          style={{ padding: 20, backgroundColor: "#dcdcdc" }}
        >
          <div className="modal-header border-bottom-0">
            <h5 className="modal-title" id="exampleModalLabel">
              Em um toque
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <p style={{ margin: "-10px 10px 20px 20px" }}>
            Fill this form or &nbsp;&nbsp;
            <a
              href="https://api.whatsapp.com/send?phone=99&text=Oi%20WePic"
              target="_blank"
              style={{ fontSize: 30 }}
            >
              <i className="fab fa-whatsapp" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="WePic" style={{ fontSize: 30 }}>
              <i className="fa fa-envelope" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="tel:+91 6302562830" style={{ fontSize: 28 }}>
              <i className="fa fa-phone" />
            </a>
          </p>
          <form
            action="#"
            className="appointment-form wow fadeInUp"
            data-wow-delay="0.3s"
            data-tt-form="appointment-from"
          >
            <div className="">
              <div>
                <div className="input-field">
                  <input
                    id="gt_name"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              {/* /.col-md-6 */}
              <div>
                <div className="input-field">
                  <input
                    id="gt_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
              </div>
              {/* /.col-md-6 */}
              <div>
                <div className="input-field d-flex flex-row">
                  <input
                    type="text"
                    placeholder={+91}
                    id="eventContact"
                    style={{ width: "25%", verticalAlign: "center" }}
                  />
                  <input
                    type="hidden"
                    id="hidden_country_code"
                    defaultValue={+91}
                  />
                  <input
                    id="gt_contact"
                    type="tel"
                    name="phone"
                    placeholder="Mobile"
                    required=""
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
              {/* /.col-md-6 */}
              {/* <div class="form-result alert" style="display: none;">
                                  <div class="content"></div>
                              </div> */}
            </div>
            {/* /.col-md-12 */}
          </form>
        </div>
        {/* /.row */}
      </div>
    </div>
  </div>
  {/*==========================*/}
  {/*=         Banner         =*/}
  {/*==========================*/}
  <section className="banner banner--ten d-flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 tt-order-lg-1">
          <div className="banner__content">
            <h1 className="banner__title wow fadeInUp" data-wow-delay="0.3s">
              <span className="span-heading" style={{ fontWeight: 800 }}>
                Compartilhe momentos usando
                <span className="underline" style={{ fontWeight: 800 }}>
                  Inteligência Artificial
                </span>
              </span>
            </h1>
            <p
              className="wow fadeInUp banner__description"
              data-wow-delay=".5s"
            >
              Encontre-se em eventos de forma imediatada!
            </p>
            <div
              className="banner__feature-wrap wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="banner__feature-item">
                <div className="banner__feature-icon">
                  <img
                    src="web/assets/img/sell-photos/icon_face_recognition.png"
                    style={{ width: 48 }}
                    alt="pc"
                  />
                </div>
                <h4 className="banner__feature-title">
                  Reconhecimento
                  <br />
                  de Faces
                </h4>
              </div>
              {/* /.banner__feature-item */}
              <div className="banner__feature-item">
                <div className="banner__feature-icon">
                  <img
                    src="web/assets/img/sell-photos/icon_privacy_first.png"
                    style={{ width: 48 }}
                    alt="pc"
                  />
                </div>
                <h4 className="banner__feature-title">
                  Segurança
                  <br />
                </h4>
              </div>
              {/* /.banner__feature-item */}
              <div className="banner__feature-item">
                <div className="banner__feature-icon">
                  <img
                    src="web/assets/img/sell-photos/icon_sell_photos.png"
                    style={{ width: 48 }}
                    alt="pc"
                  />
                </div>
                <h4 className="banner__feature-title">
                  Mercado
                  <br />
                  de fotos
                </h4>
              </div>
              {/* /.banner__feature-item */}
            </div>
            {/* /.banner__feature-wrap */}
            <ul className="banner__feature wow fadeInUp" data-wow-delay="0.9s">
              <li>
                <i className="ei ei-icon_check" />
                99.1% de precissão{" "}
              </li>
              <li>
                <i className="ei ei-icon_check" />
                Teste grátis
              </li>
            </ul>
            <div className="banner__btns">
              <a
                href=""
                className="tt__btn btn-round banner-btn wow fadeInUp"
                data-wow-delay=".7s"
              >
                Sou fotógrafo
              </a>
              <div className="banner__btns">
                <a
                  href=""
                  className="tt__btn btn-round banner-btn wow fadeInUp white-bg"
                  data-wow-delay=".7s"
                >
                  Sou cliente
                </a>
              </div>
            </div>
          </div>
          {/* /.col-xl-6 */}
        </div>
      </div>
      {/* /.banner-bg-shape */}
    </div>
  </section>
  {/*=================================*/}
  {/*=         Logo Carousel         =*/}
  {/*=================================*/}
  <section className="logo-carousel-three" style={{ marginTop: 40 }}>
    <div className="container">
      <div className="logo-slider-wrapper">
        <div className="section--heading text-center">
          <h4 className="section-title-sm wow fadeInUp">Nossos eventos</h4>
        </div>
        {/* /.section-heading */}
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="col-md-10">
            <div className="tt-logo-carousel">
              <div className="swiper-container tt-client-logo-two">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="client_logo" title="">
                    <div class="client_logo" title="">
                                <img src="web/assets/img/sell-photos/clients/status.png" alt="Brand logo"/>
                        </div>
                    </div>
                  </div>
                  {/* /.swiper-wrapper */}
                </div>
                {/* /.swiper-container */}
              </div>
              {/* /.tt-logo-carousel */}
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.logo-slider-wrapper */}
      </div>
      {/* /.container */}
    </div>
  </section>
  {/* /.logo-carousel */}
  {/*===============================*/}
  {/*=         Process Box         =*/}
  {/*===============================*/}
  <div className="process-section">
    <div className="container">
      <div className="section-heading style-three text-center">
        <h2 className="section-title wow fadeInUp" data-wow-delay="0.3s">
          Como funciona?
        </h2>
        <div className="description wow fadeInUp" data-wow-delay="0.5s">
          <p>
            A solução mais rápida e fácil do Brasil para compartilhamento de
            fotos e vendas
          </p>
        </div>
      </div>
      <div className="process-box-wrapper">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div
              className="tt-icon-box style-eleven wow fadeInUp"
              data-wow-delay="0.7s"
              style={{ marginBottom: 100 }}
            >
              <span className="process-count">01</span>
              {/* /.process-count */}
              <div
                className="icon-container"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <img
                  src="web/assets/img/sell-photos/1.png"
                  alt="Direct Access"
                />
              </div>
              {/* /.icon-container */}
              <div className="box-content">
                <h4 className="box-title">
                  <a>Criação do evento e convites</a>
                </h4>
                <p className="description">
                  Crie um evento, faça o upload e chame a galera
                </p>
              </div>
            </div>
          </div>
          {/* /.col-lg-3 col-md-4 col-sm-6 */}
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div
              className="tt-icon-box style-eleven wow fadeInUp"
              data-wow-delay="1.1s"
              style={{ marginBottom: 100 }}
            >
              <span className="process-count">02</span>
              <div
                className="icon-container"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <img
                  src="web/assets/img/sell-photos/3.png"
                  alt="Mobile Capability"
                />
              </div>
              {/* /.icon-container */}
              <div className="box-content">
                <h4 className="box-title">
                  <a>Tire uma selfie para encontrar suas fotos</a>
                </h4>
                <p className="description">
                  Mostre o seu rosto que a gente te acha
                  <br />
                </p>
              </div>
            </div>
          </div>
          {/* /.col-lg-3 col-md-4 col-sm-6 */}
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div
              className="tt-icon-box style-eleven wow fadeInUp"
              data-wow-delay="1.3s"
              style={{ marginBottom: 100 }}
            >
              <span className="process-count">03</span>
              <div
                className="icon-container"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                <img
                  src="web/assets/img/sell-photos/4.png"
                  alt="Direct Access"
                />
              </div>
              {/* /.icon-container */}
              <div className="box-content">
                <h4 className="box-title">
                  <a>Pegue suas fotos</a>
                </h4>
                <p className="description">
                  Você pode ver, comprar, baixar e compartilhar fotos
                  <br />
                </p>
              </div>
            </div>
          </div>
          {/* /.col-lg-3 col-md-4 col-sm-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.process-box-wrapper */}
    </div>
  </div>
  {/*=============================*/}
  {/*=         Security          =*/}
  {/*=============================*/}
  <section style={{ paddingBottom: 20 }}>
    <div className="container">
      <div className="security-image-content" style={{ paddingTop: 20 }}>
        <div className="row">
          <div className="col-lg-6 tt-order-2">
            <div
              className="tt-parallax__image tt-parallax__image--ten"
              style={{ padding: "100px 0 70px", backgroundColor: "#f6f6f9" }}
            >
              <div
                className="parallax-image"
                style={{ marginTop: "-160px", padding: "130px 0 40px" }}
              >
                <div
                  className="image-one wow ttfadeInUp animated"
                  data-wow-dealy="0.5s"
                >
                  <picture>
                    <source srcSet="web/assets/img/a.png" type="image/png" />
                    <source srcSet="web/assets/img/a.png" type="image/png" />
                    <img
                      src="web/assets/img/a.png"
                      style={{ width: "50%" }}
                      alt="Shape Image"
                    />
                  </picture>
                </div>
                {/* /.image-one */}
                <div className="image-two">
                  <picture>
                    <source
                      srcSet="web/assets/img/matheus.png"
                      type="image/png"
                    />
                    <source
                      srcSet="web/assets/img/matheus.png"
                      type="image/png"
                    />
                    <img
                      src="web/assets/img/matheus.png"
                      style={{ width: "72%", float: "right" }}
                      className="wow fadeIn"
                      data-parallax='{"x": -50}'
                      alt="Shape Image"
                    />
                  </picture>
                </div>
                {/* /.image-two */}
                <div className="image-three">
                  <picture>
                    <source
                      srcSet="web/assets/img/matheus-multidao.jpg"
                      type="image/png"
                    />
                    <source
                      srcSet="web/assets/img/matheus-multidao.jpg"
                      type="image/png"
                    />
                    <img
                      src="web/assets/img/matheus-multidao.jpg"
                      style={{
                        width: "60%",
                        float: "right",
                        marginRight: "-12px"
                      }}
                      className="wow fadeIn"
                      data-parallax='{"y": 50}'
                      alt="Shape Image"
                    />
                  </picture>
                </div>
                {/* /.image-two */}
              </div>
            </div>
          </div>
          {/* /.col-lg-6 */}
          <div className="col-lg-6">
            <div className="security-image-content-wrapper">
              <div className="section-heading style-four">
                <h2
                  className="section-title wow fadeInUp"
                  style={{ color: "#212121" }}
                  data-wow-delay="0.3s"
                >
                  Reconhecimento facial
                </h2>
                <p
                  className="lead wow fadeInUp"
                  style={{ color: "#212121" }}
                  data-wow-delay="0.5s"
                >
                  Tire uma selfie para encontrar suas fotos instantaneamente
                </p>
                <p className="description wow fadeInUp" data-wow-delay="0.7s">
                  <b>
                    Novo método de encontrar imagens. Usando Inteligência
                    Artificial
                  </b>
                </p>
              </div>
              <div className="row mobile_icons">
                <div className="col-lg-6">
                  <div
                    className="tt-counter-box__item style-two wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="tt-counter-box__icon">
                      <img
                        src="web/assets/img/sell-photos/icon_accuracy.png"
                        style={{ maxWidth: 48 }}
                        alt="Count Image"
                      />
                    </div>
                    <div className="tt-counter-box__content">
                      <h3 className="tt-counter-box__count">99.1%</h3>
                      <p className="tt-counter-box__count-title">
                        de Precissão
                      </p>
                    </div>
                  </div>
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div
                    className="tt-counter-box__item style-two wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="tt-counter-box__icon">
                      <img
                        src="web/assets/img/sell-photos/icon_secure.png"
                        style={{ maxWidth: 48 }}
                        alt="Count Image"
                      />
                    </div>
                    <div className="tt-counter-box__content">
                      <h3 className="tt-counter-box__count">100%</h3>
                      <p className="tt-counter-box__count-title">Seguro </p>
                    </div>
                  </div>
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
              <button
                type="button"
                data-toggle="modal"
                data-target="#form"
                className="tt__btn btn-round banner-btn wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp"
                }}
              >
                Criar evento
              </button>
            </div>
            {/* /.security-image-content-wrapper */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.security-image-content */}
    </div>
    {/* /.container */}
  </section>
  {/* /.security-feature */}
  {/*=========================*/}
  {/*=        Footer         =*/}
  {/*=========================*/}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n            .tt-app-btn {\n                border: 1px solid #1c1e21;\n                color: #1c1e21;\n                padding: 8px 12px;\n                font-size: 14px;\n                /* font-weight: 500; */\n                border-radius: 6px;\n                display: block;\n                margin-top: 20px;\n                width: 90%;\n\n            }\n\n        "
    }}
  />
  <footer id="footer" className="footer-education">
    <div className="container">
      <div className="footer-widget-wrapper">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div
              id="ultraland_widget_about-3"
              className="widget ultraland_widget  wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <img
                src="web/assets/img/sell-photos/wePic-logo.png"
                className="footer-logo"
                alt="footer logo"
              />
              <p className="footer-description">
                <b>Compartilhe momentos</b> <br />
              </p>
              <ul className="footer-contact-info">
                <li className="phone">
                  <i className="feather-map-pin" />
                  São Paulo
                </li>
                <li className="phone">
                  <i className="feather-phone" /> +55 11....-....{" "}
                </li>
                <li className="email">
                  <i className="feather-mail" /> hello@wepic
                </li>
              </ul>
            </div>
            {/* /.widget widget-about */}
          </div>
          {/* /.col-md-4 col-sm-6 */}
          <div className="col-md-3 col-sm-6">
            <div
              className="widget widget-footer-menu wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <h3 className="widget-title">Acesso rápido</h3>
              <ul className="footer-menu">
                <li>
                  <a target="_blank" href="adminapp/login.html">
                    Login
                  </a>
                </li>
                <li>
                  <a href="create-event.html">Criar evento</a>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <div className="button-wrapper">
                  <a
                    className="tt-app-btn btn-fill wow fadeInUp btn-round btn-active"
                    href=""
                    target="_blank"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp"
                    }}
                  >
                    <span className="btn-icon">
                      <i aria-hidden="true" className="fab fa-apple" />
                    </span>
                    <span className="btn-lebels">App Store</span>
                  </a>
                  <a
                    className="tt-app-btn btn-fill wow fadeInUp btn-round btn-active"
                    href=""
                    target="_blank"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp"
                    }}
                  >
                    <span className="btn-icon">
                      <i aria-hidden="true" className="fab fa-google-play" />
                    </span>
                    <span className="btn-lebels">Google Play</span>
                  </a>
                </div>
                {/* <li>
                                  <a href="https://apps.apple.com/in/app/snapwrap-app/id1539281817" target="_blank">
                                      <i class="fab fa-apple"></i><span>Available on the <br> <span class="big-txt">App Store</span></span>
                                  </a>
                              </li>

                              <li>
                                  <a href="https://play.google.com/store/apps/details?id=com.snapwrap.app" target="_blank">
                                      <i class="fab fa-google-play"></i><span>Get it on <br> <span class="big-txt">Google Play</span></span>
                                  </a>
                              </li> */}
              </ul>
            </div>
            {/* /.widget widget-footer-menu */}
          </div>
          {/* /.col-md-3 col-sm-6 */}
          <div className="col-md-3 col-sm-6">
            <div
              className="widget widget-footer-menu wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <h3 className="widget-title">Sobre nós</h3>
              <ul className="footer-menu">
                <li>
                  <a href="index.html">Fale conosco</a>
                </li>
                <li>
                  <a href="index.html">Termos</a>
                </li>
                <li>
                  <a href="index.html">Política de privacidade</a>
                </li>
                {/* <li><a href="index.html">Cacelar/reembolso</a></li> */}
              </ul>
            </div>
            {/* /.widget widget-footer-menu */}
          </div>
          {/* /.col-md-3 col-sm-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.footer-widget-wrapper */}
    </div>
    {/* /.container */}
    <div className="site-info wow fadeIn" data-wow-delay="1.1s">
      <div className="container">
        <div className="row align-items-center">
          {/* <div class="col-md-6">
                      <p class="copy-right">© Oneglint Media Solutions Pvt Ltd 2023 All Rights Reserved</p>
                  </div> */}
          {/* /.col-md-6 */}
          <div className="col-md-6">
            <ul className="footer-social-link">
              <li>
                <a href="" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </div>
    {/* /.site-info */}
    {/*
     */}
  </footer>
  {/* /#footer */}
  {/* /#site */}
  {/* Dependency Scripts */}
  {/* Site Scripts */}
  <link rel="stylesheet" href="intltelinput/build/css/intlTelInput.css" />
  <link
    rel="stylesheet"
    href="../code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n            .iti {\n        \n        width: 25%;\n\n        }\n        .iti__selected-flag {\n            padding: 0px 6px 14px 8px;\n        }\n\n        .iti--separate-dial-code .iti__selected-flag {\n        background-color: transparent;\n        }\n\n        .iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag {\n            background-color: transparent;\n        }\n        "
    }}
  />
</>

        </Fragment>
    )
}

export default Index;

