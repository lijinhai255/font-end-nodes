(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1283:function(t,a,n){"use strict";n.r(a);var s=n(24),e=Object(s.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"hardhat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardhat"}},[this._v("#")]),this._v(" hardhat")]),this._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# 1.初始化项目 \n npx hardhat\n\n\n # 2. 编写合约\n # contracts/MyContract.sol\n\n\n #3. 编译合约\n npx hardhat compile\n\n #4.编写测试\n # test/MyContract.test.js\n\nnpx hardhat test\n\n\n\n\n #6.启动本地网络\n npx hardhat node\n\n #7.部署合约\nnpx hardhat run --network localhost scripts/deploy.js\n\n")])])]),t("p",[t("img",{attrs:{src:n(796),alt:"alt text"}})]),this._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("您在使用 Hardhat 部署合约时遇到了 TypeError: metaCoin.deployed is not a function 的错误。这是由于 ethers.js 在版本 6 中对合约部署方法进行了更改。在 ethers.js v6 中，deployed() 方法已被弃用，取而代之的是 waitForDeployment() 方法。 \nGITHUB\n\n因此，您需要将部署脚本中的 await metaCoin.deployed() 修改为 await metaCoin.waitForDeployment()。同时，获取合约地址的方式也有所变化，metaCoin.address 应替换为 metaCoin.target。\n\n")])])]),t("p",[t("img",{attrs:{src:n(797),alt:"alt text"}})])])}),[],!1,null,null,null);a.default=e.exports},796:function(t,a,n){t.exports=n.p+"assets/img/image.a33d9686.png"},797:function(t,a,n){t.exports=n.p+"assets/img/hardhat.85eaa8f5.png"}}]);