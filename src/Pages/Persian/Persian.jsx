import React from 'react'
import "./Persian.css"
import { Link } from 'react-router-dom'

export default function Persian() {
  return (
    <>
      <div class="w-100 first-bg">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark custom-nav custom-back">
          <div class="container-fluid">
            <a class="navbar-brand fs-1 color custom-font" href="#">آریان</a>
            <button class="navbar-toggler border-dark bgmenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <div>
                <span class="text-white custom-font color">منو</span>
                <span class="navbar-toggler-icon"></span>
              </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 vb">
                <li class="nav-item me-lg-3 me-xxl-4">
                  <a class="nav-link link-hover color custom-font" aria-current="page" href="#">صفحه اصلی</a>
                </li>
                <li class="nav-item me-lg-3 me-xxl-4">
                  <a class="nav-link link-hover color custom-font" href="#">طراحی ها</a>
                </li>
                <li class="nav-item me-lg-3 me-xxl-4">
                  <a class="nav-link link-hover color custom-font" href="#">خدمات</a>
                </li>
                <li class="nav-item me-lg-3 me-xxl-4 dropdown">
                  <a class="nav-link dropdown-toggle custom-drop link-hover color custom-font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    صفحات
                  </a>
                  <ul class="dropdown-menu custom-menu" aria-labelledby="navbarDropdown">
                    <li><Link class="dropdown-item" to="/">نسخه انگلیسی</Link></li>
                    <li><a class="dropdown-item" href="#">جزییات کار</a></li>
                  </ul>
                </li>
                <li class="nav-item me-lg-3 me-xxl-4">
                  <a class="nav-link link-hover color custom-font" href="#">درباره</a>
                </li>
                <li class="nav-item me-lg-3 me-xxl-4 dropdown">
                  <a class="nav-link dropdown-toggle custom-drop link-hover color custom-font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    وبلاگ
                  </a>
                  <ul class="dropdown-menu custom-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">وبلاگ</a></li>
                    <li><a class="dropdown-item" href="#">وبلاگ تک</a></li>
                  </ul>
                </li>
                <li class="nav-item me-lg-3 me-xxl-4">
                  <a class="nav-link link-hover color custom-font" href="#">کاربران</a>
                </li>
              </ul>
              <form class="d-flex d-none d-lg-block">
                <Link class="btn custom-btn color custom-font" type="submit" to={"/"}>English</Link>
              </form>
            </div>
          </div>
        </nav>
        <div class="container h-100 px-0">
          <div class="row d-flex justify-content-center h-100">
            <div class="col-10 col-lg-8 d-lg-inline-block align-self-center px-0 text-end">
              <h2 class="mb-5 text-white custom-h2 custom-font">سلام من آریان هستم
                <br /><span class="color custom-font">طراح خلاق</span></h2>
              <a href="#" class="border border-1 px-5 py-3 text-decoration-none color custom-btn2 custom-font">کارامو اینجا ببین</a>
            </div>
            <div class="d-none d-lg-inline-block col-4 align-self-center  img-div">
              <img src="../images/arian.png" class="img-fluid w-100 h-100 rounded-circle" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 second-bg py-90">
        <div class="container">
          <div class="row">
            <div class="col-xl-10 mb-4 mb-md-5">
              <h3 class="text-white mb-3 text-start fs-1 custom-font text_right">من یه طراح خلاق اهل سنندجم که عاشق طراحی تمیز، ساده و منحصر به فردم. از هنرآفرینی هم لذت می برم. </h3>
            </div>
            <div class="col-12 col-md-6 mb-5 ">
              <p class="text-white text-end my-4 custom-fonnt text_right">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید </p>
              <p class="text-white text-end mb-4 custom-font "> از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند </p>
              <a href="#" class="mt-5 d-block text-decoration-none py-3 px-5 custom-link custom-font ">دانلود نمونه</a>
            </div>
            <div class="col-12 col-md-6 col-lg-5 offset-lg-1 max-width px-3">
              <div class="mb-3 d-flex justify-content-between">
                <span class="text-white custom-font">اسکلت قالب</span>
                <span class="text-white custom-font">78%</span>
              </div>
              <div class="progress mb-4 prog-h">
                <div class="progres-bar prog"></div>
              </div>
              <div class="mb-3 d-flex justify-content-between">
                <span class="text-white custom-font">رابط کاربری/هدایت کاربری</span>
                <span class="text-white custom-font">75%</span>
              </div>
              <div class="progress mb-4 prog-h">
                <div class="progres-bar w-75 prog"></div>
              </div>
              <div class="mb-3 d-flex justify-content-between">
                <span class="text-white custom-font">طراحی تعاملی</span>
                <span class="text-white custom-font">50%</span>
              </div>
              <div class="progress mb-4 prog-h">
                <div class="progres-bar w-50 prog"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 third-bg">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12">
              <h3 class="text-white custom-font text-end">خدمات من</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4 px-3">
              <div class="py-5 px-4 mx-auto text-center custom-border max-w">
                <img src="../images/1.svg" alt="icon" />
                <h3 class="fs-4 mt-4 mb-3 color custom-font">طراحی وب و موبایل</h3>
                <p class="text-white custom-font"> از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراح</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 px-3">
              <div class="py-5 px-4 mx-auto text-center custom-border max-w">
                <img src="../images/2.svg" alt="icon" />
                <h3 class="fs-4 mt-4 mb-3 color custom-font">توسعه وب</h3>
                <p class="text-white custom-font">از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراح</p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4 px-3">
              <div class="py-5 px-4 mx-auto text-center custom-border max-w">
                <img src="../images/3.svg" alt="icon" />
                <h3 class="fs-4 mt-4 mb-3 color custom-font">تجارت الکترونیک</h3>
                <p class="text-white custom-font">ز نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراح</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 fourth-bg">
        <div class="container">
          <div class="row mb-5">
            <div class="col-12">
              <h3 class="text-white fs-1 custom-font text-end">طراحی های من</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="text-center">
                <div>
                  <img src="../images/work1.webp" class="img-fluid" alt="Mobile" />
                </div>
                <div class="mt-2 py-4 mb-70">
                  <span class="text-white custom-font">اپلیکیشن موبایل</span><br />
                  <a href="#" class="text-decoration-none fs-3 color custom-font">اپلیکیشن رنگدانه</a>
                </div>
              </div>
              <div class="text-center">
                <div>
                  <div>
                    <img src="../images/work2.webp" class="img-fluid" alt="Mobile" />
                  </div>
                  <div class="mt-2 py-4 mb-70">
                    <span class="text-white custom-font">اپلیکیشن موبایل</span><br />
                    <a href="#" class="text-decoration-none fs-3 color custom-font">اپلیکیشن رنگدانه</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-center">
                <div>
                  <img src="../images/work3.webp" class="img-fluid" alt="Mobile" />
                </div>
                <div class="mt-2 py-4 mb-70">
                  <span class="text-white custom-font">اپلیکیشن موبایل</span><br />
                  <a href="#" class="text-decoration-none fs-3 color custom-font">اپلیکیشن رنگدانه</a>
                </div>
              </div>
              <div class="text-center">
                <div>
                  <div>
                    <img src="../images/work4.webp" class="img-fluid" alt="Mobile" />
                  </div>
                  <div class="mt-2 py-4 mb-70">
                    <span class="text-white custom-font">اپلیکیشن موبایل</span><br />
                    <a href="#" class="text-decoration-none fs-3 color custom-font">اپلیکیشن رنگدانه</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="custom-border2">
                <a href="#" class="w-100 h-100 d-block text-center text-decoration-none py-3 px-5 color more-work custom-font">نمونه کار بیشتر</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 fifth-bg">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h3 class="text-white fs-1 mb-4 slider">سخن بزرگان</h3>
            </div>
            <div class="col-12">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="../images/arian2.png" class="d-block w-50 rounded-circle mx-auto mb-slid" alt="slide" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="custom-font">وینستون چرچیل</h5>
                      <p class="custom-font">موفقیت یا شکست هیچ کدام پایان کار نیسند ، چیزی که مهمه جسارت شما برای ادامه دادن به مسیره!</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="../images/arian3.png" class="d-block w-50 rounded-circle mx-auto mb-slid" alt="slide" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="custom-font">آریان خامسی</h5>
                      <p class="custom-font">من ترجیح می‌دهم به خاطر چیزهایی که انجام داده‌ام پشیمان باشم تا چیزهایی که انجام نداده‌ام…</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="../images/arian1.png" class="d-block w-50 rounded-circle mx-auto mb-slid" alt="slide" />
                    <div class="carousel-caption d-none d-md-block ">
                      <h5 class="custom-font">جیم ران</h5>
                      <p class="custom-font">اگر تو برای زندگی ات طرحی نداشته باشی، احتمالا جز طرح یکی دیگه هستی. و حدس بزن اونها چه چیزهایی برای تو در نظر گرفتن؟ چیز زیادی نیست !</p>
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">قبلی</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">بعدی</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 sixth-bg">
        <div class="container">
          <div class="row m-90">
            <div class="col-lg-8">
              <h3 class="text-white fs-1 mb-4 custom-font text-end">یه پروژه مدنظرته؟<a href="#" class="text-decoration-none color custom-font">بیا دربارش صحبت کنیم</a></h3>
              <p class="text-white custom-font text-end">لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای </p>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-3">
              <div class="py-4 d-flex justify-content-between align-items-center px-custom custom-border icon-cell ">
                <span class="text-white custom-span custom-font">رفتار</span>
                <a href="#"><i class="bi bi-behance icon"></i></a>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="py-4 d-flex justify-content-between align-items-center px-custom custom-border icon-cell">
                <span class="text-white custom-span custom-font">دریبل زدن</span>
                <a href="#"><i class="bi bi-dribbble icon"></i></a>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="py-4 d-flex justify-content-between align-items-center px-custom custom-border icon-cell">
                <span class="text-white custom-span custom-font">متوسط</span>
                <a href="#"><i class="bi bi-medium icon"></i></a>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="py-4 d-flex justify-content-between align-items-center px-custom custom-border icon-cell">
                <span class="text-white custom-span custom-font">لینکدان</span>
                <a href="#"><i class="bi bi-linkedin icon"></i></a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <p class="text-center copy custom-font">حق کپی رایت ©2022 تمامی حقوق محفوظ است | این قالب با توسط <a href="https://colorlib.com/" class="text-decoration-none color custom-font">Colorlib</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
