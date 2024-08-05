import React, { useState, useEffect, useRef } from "react";
import { locale, addLocale } from "primereact/api";
import { useLocation, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import PrimeReact from "primereact/api";
import { Tooltip } from "primereact/tooltip";

import { AppTopbar } from "./AppTopbar";
import { AppConfig } from "./AppConfig";
import ProtectedRoute from "./routes/ProtectedRoute";

import Loader from "./shared/Loader";
import ToastContainer from "./shared/ToastContainer";
import { ConfirmPopup } from "primereact/confirmpopup";

import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
import "./assets/demo/flags/flags.css";
import "./assets/demo/Demos.scss";
import "./assets/layout/layout.scss";
import "./App.scss";

const App = () => {
  const [layoutMode, setLayoutMode] = useState("static");
  const [layoutColorMode, setLayoutColorMode] = useState("light");
  const [inputStyle, setInputStyle] = useState("outlined");
  const [ripple, setRipple] = useState(true);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
  const copyTooltipRef = useRef();
  const location = useLocation();

  addLocale("ar", {
    Employee: "موظف",
    startsWith: "يبدأ ب",
    contains: "يحتوي",
    notContains: "لا يحتوي",
    endsWith: "ينتهي ب",
    equals: "يساوي",
    notEquals: "لا يساوي",
    noFilter: "لا يوجد ترشيح",
    filter: "ترشيح",
    lt: "أقل من",
    lte: "اقل من او يساوي",
    gt: "أكبر من",
    gte: "أكبر من او يساوي",
    dateIs: "التأريخ هو",
    dateIsNot: "التأريخ ليس هو",
    dateBefore: "التأريخ قبل",
    dateAfter: "التأريخ بعد",
    custom: "تخصيص",
    clear: "واضح",
    apply: "أضافة",
    matchAll: "يطابق الكل",
    matchAny: "لا يطافق احد",
    addRule: "أضافة قاعدة",
    removeRule: "حذف قاعدة",
    accept: "نعم",
    reject: "لا",
    choose: "إختار",
    upload: "تحمّيل",
    cancel: "الغاء",
    completed: "مكتمل",
    pending: "قيد الإنتظار",
    dayNames: [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الاربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
    dayNamesShort: [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الاربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
    dayNamesMin: [
      "الأحد",
      "الإثنين",
      "الثلاثاء",
      "الاربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ],
    monthNames: [
      "كانون الثاني",
      "شباط",
      "أذار",
      "نيسان",
      "أيار",
      "حزيران",
      "تموز",
      "اب",
      "ايلول",
      "تشرين اول",
      "تشرين ثاني",
      "كانون الاول",
    ],
    monthNamesShort: [
      "كانون الثاني",
      "شباط",
      "أذار",
      "نيسان",
      "أيار",
      "حزيران",
      "تموز",
      "اب",
      "ايلول",
      "تشرين اول",
      "تشرين ثاني",
      "كانون الاول",
    ],
    chooseYear: "اختار السنة",
    chooseMonth: "اختار الشهر",
    chooseDate: "اختار اليوم",
    prevDecade: "العقد السابق",
    nextDecade: "العقد القادم",
    prevYear: "السنه السابقة",
    nextYear: "السنة التالية",
    prevMonth: "الشهر السابق",
    nextMonth: "الشهر التالي",
    prevHour: "الساعة السابقة",
    nextHour: "الساعة التالية",
    prevMinute: "الدقيقة السابقة",
    nextMinute: "الدقيقة التاليه",
    prevSecond: "الثانية السابقة",
    nextSecond: "الثانية النالية",
    am: "قبل الظهر",
    pm: "بعد الظهر",
    today: "اليوم",
    weekHeader: "الأسبوع",
    firstDayOfWeek: 0,
    dateFormat: "شهر/يوم/سنة",
    weak: "ضعيف",
    medium: "متوسط",
    strong: "قوي",
    passwordPrompt: "أدخل كلمة السر",
    emptyFilterMessage: "الخيارات غير متاحة",
    searchMessage: "{0} قيد موجود",
    selectionMessage: "{0} عناصر تم اختيارها",
    emptySelectionMessage: "لم يتم اختيار اي عنصر",
    emptySearchMessage: "لا تتوفر بيانات",
    emptyMessage: "لا توجد نتيجة",
    aria: {
      trueLabel: "صحيح",
      falseLabel: "خطأ",
      nullLabel: "لا يوجد اختيار",
      star: "نجمه واحدة",
      stars: "{star} نجوم",
      selectAll: "جميع العناصر غير مختارة",
      unselectAll: "جميع العناصر غير مختارة",
      close: "اغلاق",
      previous: "السابق",
      next: "التالي",
      navigation: "التنقل بين الصفحات",
      scrollTop: "انتقل إلى الأعلى",
      moveTop: "الأنتقال للأول",
      moveUp: "الأنتقال للأعلى",
      moveDown: "الإنتقال للأسفل",
      moveBottom: "الانتقال للأخير",
      moveToTarget: "نقل الى الهدف",
      moveToSource: "نقل الى المصدر",
      moveAllToTarget: "نقل الجميع الى الهدف",
      moveAllToSource: "نقل الجميع الى المصدر",
      pageLabel: "صفحة",
      firstPageLabel: "الصفحة الاولى",
      lastPageLabel: "الصفحة الاخيرة",
      nextPageLabel: "الصفحة التالية",
      previousPageLabel: "الصفحة السابقة",
      rowsPerPageLabel: "عدد الصفوف في الصفحة الواحدة",
      jumpToPageDropdownLabel: "قائمة منسدلة الذهاب الى صفحة",
      jumpToPageInputLabel: "حقل الذهاب الى صفحة",
      selectRow: "اختيار الصف",
      unselectRow: "عدم اختيار الصف",
      expandRow: "اظهار الصف",
      collapseRow: "اخفاء الصف",
      showFilterMenu: "أظهار تصفية القائمة",
      hideFilterMenu: "اخفاء تصفية القائمة",
      filterOperator: "تصفية العاملين",
      filterConstraint: "تصفية القيود",
      editRow: "تعديل  الصف",
      saveEdit: "خزن التعديلات",
      cancelEdit: "الغاء التعديل",
      listView: "واجهة قائمة",
      gridView: "واجهة جدول",
      slide: "زلاقة",
      slideNumber: "{slideNumber}",
      zoomImage: "تكبير الصورة",
      zoomIn: "تكبير",
      zoomOut: "تصغير",
      rotateRight: "تدوير بإتجاه اليمين",
      rotateLeft: "تدوير بأتجاه اليسار",
    },
  });

  addLocale("en", {
    Employee: "Employee",
  });
  locale("en");

  PrimeReact.ripple = true;

  let menuClick = false;
  let mobileTopbarMenuClick = false;

  useEffect(() => {
    if (mobileMenuActive) {
      addClass(document.body, "body-overflow-hidden");
    } else {
      removeClass(document.body, "body-overflow-hidden");
    }
  }, [mobileMenuActive]);

  useEffect(() => {
    copyTooltipRef &&
      copyTooltipRef.current &&
      copyTooltipRef.current.updateTargetEvents();
  }, [location]);

  const onInputStyleChange = (inputStyle) => {
    setInputStyle(inputStyle);
  };

  const onRipple = (e) => {
    PrimeReact.ripple = e.value;
    setRipple(e.value);
  };

  const onLayoutModeChange = (mode) => {
    setLayoutMode(mode);
  };

  const onColorModeChange = (mode) => {
    setLayoutColorMode(mode);
  };

  const onWrapperClick = (event) => {
    if (!menuClick) {
      setMobileMenuActive(false);
    }

    if (!mobileTopbarMenuClick) {
      setMobileTopbarMenuActive(false);
    }

    mobileTopbarMenuClick = false;
    menuClick = false;
  };

  const onToggleMenuClick = (event) => {
    menuClick = true;

    if (isDesktop()) {
      if (layoutMode === "overlay") {
        setMobileMenuActive(false);
      }
    } else {
      setMobileMenuActive((prevState) => !prevState);
    }

    event.preventDefault();
  };

  const onMobileTopbarMenuClick = (event) => {
    mobileTopbarMenuClick = true;

    setMobileTopbarMenuActive((prevState) => !prevState);
    event.preventDefault();
  };

  const onMobileSubTopbarMenuClick = (event) => {
    mobileTopbarMenuClick = true;

    event.preventDefault();
  };

  const isDesktop = () => {
    return window.innerWidth >= 992;
  };

  const addClass = (element, className) => {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  };

  const removeClass = (element, className) => {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  };

  const wrapperClass = classNames("layout-wrapper", {
    "layout-overlay": layoutMode === "overlay",
    "layout-static": layoutMode === "static",
    "p-input-filled": inputStyle === "filled",
    "p-ripple-disabled": ripple === false,
    "layout-theme-light": layoutColorMode === "light",
  });

  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    window.addEventListener("online", () => console.log("online"));
    window.addEventListener("offline", () => console.log("offline"));
  }, []);

  return (
    <div
      dir={isRTL ? "rtl" : ""}
      className={wrapperClass}
      onClick={onWrapperClick}
    >
      <Tooltip
        ref={copyTooltipRef}
        target=".block-action-copy"
        position="bottom"
        content="Copied to clipboard"
        event="focus"
      />
      <AppTopbar
        isRTL={isRTL}
        setIsRTL={setIsRTL}
        onToggleMenuClick={onToggleMenuClick}
        layoutColorMode={layoutColorMode}
        mobileTopbarMenuActive={mobileTopbarMenuActive}
        onMobileTopbarMenuClick={onMobileTopbarMenuClick}
        onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick}
      />
      <div className="layout-main-container">
        <div className="layout-main h-full ">
          <ConfirmPopup />
          <ToastContainer />
          <Loader />
          <Switch>
            <ProtectedRoute />
          </Switch>
        </div>
      </div>
      <AppConfig
        rippleEffect={ripple}
        onRippleEffect={onRipple}
        inputStyle={inputStyle}
        onInputStyleChange={onInputStyleChange}
        layoutMode={layoutMode}
        onLayoutModeChange={onLayoutModeChange}
        layoutColorMode={layoutColorMode}
        onColorModeChange={onColorModeChange}
      />
      <CSSTransition
        classNames="layout-mask"
        timeout={{ enter: 200, exit: 200 }}
        in={mobileMenuActive}
        unmountOnExit
      >
        <div className="layout-mask p-component-overlay"></div>
      </CSSTransition>
    </div>
  );
};

export default App;
