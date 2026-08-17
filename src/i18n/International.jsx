import React,{createContext,useContext,useEffect,useState} from "react";
import {translations} from "./translations";
import {markets} from "./markets";

const C=createContext(null);

function googleLang(code){
  return code === "zh" ? "zh-CN" : code;
}

function applyGoogleLanguage(code){
  const select=document.querySelector(".goog-te-combo");
  if(!select) return false;
  const value=googleLang(code);
  select.value=value;
  select.dispatchEvent(new Event("change"));
  return true;
}

export function InternationalProvider({children}){
  const [language,setLanguageState]=useState(localStorage.getItem("gm-language")||"en");
  const [country,setCountry]=useState(localStorage.getItem("gm-country")||"IN");

  useEffect(()=>{
    localStorage.setItem("gm-language",language);
    localStorage.setItem("gm-country",country);
    document.documentElement.lang=language;
    document.documentElement.dir=language==="ar"?"rtl":"ltr";
    if(language!=="en"){
      let tries=0;
      const timer=setInterval(()=>{
        tries++;
        if(applyGoogleLanguage(language)||tries>30) clearInterval(timer);
      },300);
      return()=>clearInterval(timer);
    } else {
      let tries=0;
      const timer=setInterval(()=>{
        tries++;
        if(applyGoogleLanguage("en")||tries>10) clearInterval(timer);
      },200);
      return()=>clearInterval(timer);
    }
  },[language,country]);

  const setLanguage=(lang)=>{
    setLanguageState(lang);
    setTimeout(()=>applyGoogleLanguage(lang),50);
  };
  const t=k=>translations[language]?.[k]??translations.en[k]??k;
  return <C.Provider value={{language,country,setLanguage,setCountry,t,markets,currentMarket:markets.find(x=>x.code===country)||markets[0]}}>{children}</C.Provider>;
}
export function useInternational(){return useContext(C)}
export function MarketLanguageSwitcher(){
  const {language,country,setLanguage,setCountry,markets,currentMarket}=useInternational();
  return <div className="market-switcher">
    <select value={country} onChange={e=>{const m=markets.find(x=>x.code===e.target.value);setCountry(e.target.value);if(m)setLanguage(m.language)}} aria-label="Market">
      {markets.map(m=><option key={m.code} value={m.code}>{m.flag} {m.name}</option>)}
    </select>
    <select value={language} onChange={e=>setLanguage(e.target.value)} aria-label="Language">
      <option value="en">EN</option><option value="hi">HI</option><option value="fr">FR</option><option value="de">DE</option><option value="es">ES</option><option value="it">IT</option><option value="pt">PT</option><option value="zh">ZH</option><option value="ja">JA</option><option value="ko">KO</option><option value="ar">AR</option><option value="ru">RU</option>
    </select>
  </div>
}
