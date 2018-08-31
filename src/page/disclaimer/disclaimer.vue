<template>
  <div id="index" class="container-fluid" style="width: 100%;">
    <!--导航-->
    <div class="header clearfix">
      <img class="indexlogo fl nfl" src="../../assets/images/index/logo.svg" @click="indexlogo"/>
      <ul class="fr clearfix nav">
        <li> <a @click="indexlogo">返回首页</a></li><!---->
      </ul>
      <!--<img class="fenlei" @click="showNav()" src="../../assets/images/index/fenlei.svg"/>-->
      <div class="fenlei nodet" @click="indexlogo">返回首页</div>
    </div>
    <!-- 内容 -->
    <div class="index-warp2"  style="height: 715px">
      <h1>免责声明</h1>
      <span>

      </span>
      <p>        凡进入、访问或使用北京知帆科技有限公司网站（chaindigg.com），即表明已经同意接受以下免责声明的约束，请仔细阅读以下免责声明：
      </p>
      <p>

        1、本网站所载信息、资料以及北京知帆科技有限公司（以下简称“我公司”）发布的数据和服务，包括但不限于交易所币流数据,仅代表我公司观点，供一般性参考，除法律法规另有规定外，我公司对上述内容的真实性、准确性、完整性不作任何承诺和保证。<br>
        2、我公司保证相关数据获取源自公开渠道，系根据国际和行业通行的准则以合法渠道获取上述信息，并尽可能保证可靠、准确和完整，但并不保证数据所述信息的准确性和完整性。<br>
        3、本网站所载信息和资料，特别是我公司发布的有关数据信息，不应被视为投资研究决策的依据，不能作为道义的、责任的和法律的依据或者凭证，无论是否已经明示或者暗示。<br>
        4、我公司将随时补充、更正和修订有关信息，但不保证及时发布。我公司对本网站所载或所涉及的信息和资料的及时性不作任何承诺和保证。本公司有权无需事先通知而删除或修改本网站信息。对于我公司所提供信息所导致的任何直接的或者间接的投资盈亏后果不承担任何责任。<br>
        5、本公司就本网站各项服务的安全、不中断不作任何承诺和保证。对于因技术故障（如传输错误、技术缺陷、第三者侵入等）而导致的任何数据缺失，无法进入、访问或使用本网站而可能导致的任何直接或间接损失，本公司不承担任何法律责任。<br>
        6、本公司具有法律法规规定的其它有关免责规定项下所享有的一切权利，本公司没有主张或迟延主张该等权利并不视为本公司放弃该等权利。<br>
        7、我公司发布的数据及服务版权仅为本公司所有，未经书面许可，任何机构和个人不得以任何形式翻版、复制和发布。如引用发布，需注明出处为“北京知帆科技有限公司”或“Chaindigg”，且不得对发布的数据及服务进行有悖原意的引用、删节和修改。<br>
        8、我公司对于本免责声明条款具有修改权和最终解释权。

      </p>
      <p>我公司在此郑重提醒，以上各条款均为免责条款，我公司不承担与此相关的任何损失和法律责任。</p>

    </div>
    <!-- 尾部 -->
    <div class="footer fot">
      <div class="clearfix">
        <ul class="fl icon-logo clearfix"  style="margin-bottom: 0;line-height: 53px">
          <li class="fl codeBy1">
            <img src="../../assets/images/index/weixin.svg"/>
            <img class="codeImg1" src="../../assets/images/index/weixincode.png"/>
          </li>
          <li class="fl ">
            <a target="_blank" href="https://twitter.com/chaindigg">
              <img src="../../assets/images/index/Twitter.svg"/>
            </a>
          </li>
          <li class="fl codeBy2">
            <img src="../../assets/images/index/qq.svg"/>
            <img class="codeImg2" src="../../assets/images/index/qqcode.png"/>
          </li>
          <li class="fl">
            <a  target="_blank"  href="https://weibo.com/p/1006066624170357/home?from=page_100606&mod=TAB&is_all=1#place">
              <img src="../../assets/images/index/weibo.svg"/>
            </a>
          </li>
        </ul>
        <p class="fr xxinxi" style="margin-bottom: 5px;margin-top: 5px">
          <span>电话: 400-6988-698 &emsp;邮箱: info@chaindigg.com</span>  &emsp;公司地址: 中国北京市海淀区上地三街9号金隅嘉华大厦C座408
        </p>
      </div>
      <div class="lines"></div>
      <div class="bottom-main">
        <span>Copyright © 2017-2018 北京知帆科技有限公司 版权所有</span>&emsp;免责声明
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "disclaimer",
        methods:{
          indexlogo (){
            this.$router.push('/')
          }
        },
    }
</script>

<style src="../../assets/css/index.css">

</style>

