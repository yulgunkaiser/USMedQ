import React from "react";
import { useNavigate } from "react-router-dom";
import "./TopBelt.css";

const TopBelt: React.FC = () => {
  const navigate = useNavigate();
  // Stub functions for demo purposes
  const setHomepage = (url: string) => {
    alert(`Set homepage to: ${url}`);
  };
  const addFavorite = (href: string, title: string) => {
    alert(`Add favorite: ${title}`);
  };
  const showWindow = (id: string, url: string, method: string, num: number) => {
    alert(`Show window: ${id}, ${url}`);
  };
  const showMenu = (options: any) => {
    alert(`Show menu: ${JSON.stringify(options)}`);
  };

  return (
    <div id="topbelt" className="cl">
      <div className="eis_wp cl">
        <div className="z">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/contact"); }}>شىرىك بۇلۇش</a>
          <span className="pipe">|</span>
          <a href="#" onClick={() => addFavorite("#", "پىكىر بېرىش")}>پىكىر بېرىش</a>
          <a style={{ display: "inline", marginTop: 0, marginLeft: 3, marginRight: 3 }} href="#" onClick={() => showWindow("tom_weixin_guanzu", "plugin.php?id=tom_weixin:guanzu", "get", 0)}>
            <img src="source/plugin/tom_weixin/images/wx_guanzhu.gif" alt="Weixin" />
          </a>
        </div>
        <div className="y">
          <a href="member.php_mod=logging&action=login&referer=.html" onClick={() => showWindow("login", "member.php_mod=logging&action=login&referer=.html", "get", 0)} title="كۈرۈش">كۈرۈش</a>
          <a href="member.php_mod=register.html" title="تۈزۈملۈتۈش">تۈزۈملۈتۈش</a>
          <a href="#" onClick={() => showWindow("login", "member.php?mod=logging&action=login&viewlostpw=1", "get", 0)} title="پارول قايتۇرۈۋېلۈش">پارول قايتۇرۈۋېلۈش</a>
          <span className="eis_tpipe"></span>
          <a href="#" id="elogin" onMouseOver={() => showMenu({ ctrlid: "elogin", pos: "34!", ctrlclass: "a", duration: 2 })}>用其他账号登陆</a>
          <span className="eis_tpipe"></span>
          <a id="eis" href="#" onMouseOver={() => showMenu({ ctrlid: "eis", pos: "34!", ctrlclass: "a", duration: 2 })} title="ېۇسلۇب ېالماشتۇرۇش">ېۇسلۇب ېالماشتۇرۇش</a>
          <span className="eis_tpipe"></span>
        </div>
      </div>
    </div>
  );
};

export default TopBelt;
