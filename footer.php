<div class="container-fluid crumbtrail" id="crumbtrail-bottom">
  <a href="https://bunting.com"><span class="glyphicon glyphicon-home" aria-hidden="true"></span><span> Home</span></a><?php
    if (is_home()){
      ?>
        <a href="/"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><em>Knowledgebase</em></a>
      <?php
    }
    else {
      ?>
        <a href="/"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span>Knowledgebase</span></a>
      <?php
      if (!is_single()){
        ?>
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><em><a href="<?php print_r(get_category_link( get_the_category()[0]->term_id ))  ?>"><span><?php
          print_r(get_the_category()[0]->name);
        ?></span></em></a>
        <?php
      }
      else {
          ?>
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><small><a href="<?php print_r(get_category_link( get_the_category()[0]->term_id ))  ?>"></small><span><?php
            print_r(get_the_category()[0]->name);
          ?>
          </a>
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><em><?php print_r(get_the_title()) ?></em>
        <?php
      }
    }
  ?>
</div>
</div>

<div id="footer">
   <div class="container-fluid" id="section-footer_navigation">
      <div class="row">
         <div class="col-xs-12 col-sm-4 col-md-3 col-md-push-2 col-lg-3 col-lg-push-3">
            <h6>Bunting</h6>
            <ul>
               <li><a href="https://bunting.com/" title="Home"><span>Home</span></a></li>
               <li><a href="https://bunting.com/customers" title="Customers"><span>Customers</span></a></li>
               <!--<li><a href="https://bunting.com/enterprise-stack" title="Enterprise Stack"><span>Enterprise Stack</span></a></li>-->
            </ul>
            <h6>Platform</h6>
            <ul>
               <li><a href="https://bunting.com/platform/integration" title="Integration"><span>Integration</span></a></li>
               <li><a href="https://bunting.com/platform/security-reliability" title="Security &amp; Reliability"><span>Security &amp; Reliability</span></a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-3 col-md-push-2 col-lg-3 col-lg-push-3">
           <h6>Products</h6>
           <ul>
              <li><a href="https://bunting.com/products/what-is-shopcast" title="Social Shopping Software"><span>Shopcast</span></li>
              <li><a href="https://bunting.com/products/personalization-cloud" title="Website Personalization Tools"><span>Personalization Cloud</span></a></li>
           </ul>
            <h6>Pricing</h6>
            <ul>
               <!--<li><a href="https://bunting.com/pricing/shopcast" title="Pricing - Shopcast"><span>Shopcast Pricing</span></a></li>-->
               <li><a href="https://bunting.com/pricing/personalization-cloud" title="Pricing - Personalization Cloud"><span>Personalization Cloud Pricing</span></a></li>
               <li><a href="https://bunting.com/pricing/ppc-protection" title="Pricing - Pay Per Click Protection"><span>PPC Protection Pricing</span></a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-sm-4 col-md-3 col-md-push-2 col-lg-3 col-lg-push-3">
            <h6>Company</h6>
            <ul>
               <li><a href="https://bunting.com/company/about" title="About Us"><span>About Us</span></a></li>
               <li><a href="https://bunting.com/company/careers" title="Careers at Bunting"><span>Careers</span></a></li>
               <li><a href="https://bunting.com/company/brand-guidelines" title="Brand Guidelines"><span>Brand Guidelines</span></a></li>
               <li><a href="https://bunting.com/company/press" title="Press"><span>Press</span></a></li>
            <!--</ul>
            <h6>Resources</h6>
            <ul>-->
               <li><a href="http://blog.bunting.com" title="Conversion Rate Optimization Blog" target="_blank"><span>Blog</span> <span class="glyphicon glyphicon-new-window"></span></a></li>
               <li><a href="http://knowledgebase.bunting.com" title="Bunting Knowledgebase" target="_blank"><em>Knowledgebase</em> <span class="glyphicon glyphicon-new-window"></span></a></li>
            </ul>
         </div>
         <div class="col-xs-12 col-md-2 col-md-pull-10 col-lg-2 col-lg-pull-9">
            <a href="/"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/media/logo_icon.svg"></a>
         </div>
      </div>
   </div>
   <p>Copyright © 2018 <a href="">Bunting Software Ltd</a>, All Rights Reserved. <br class="visible-xs"><a href="legal/privacy">Privacy Policy</a>, <a href="legal/cookies">Cookies Policy</a> and <a href="legal/terms">Terms</a>.</p>
</div>
</div>

<div class="clearfix"></div>
<script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/general.js"></script>

</body>
