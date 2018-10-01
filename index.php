<?php
/**
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Bunting
 */

 get_header();
?>

<body id="products-shopcast" class="full_footer" cz-shortcut-listen="true" style="">
  <div id="page_loading" style="width: 100%; opacity: 0; display: none;"></div>

  <nav class="navbar navbar-default" role="navigation" id="navbar_header" style="top: 0px;">
    <div class="navbar_inner">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href=""><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/media/logo.svg" alt="Bunting"></a>
        </div>

        <div class="collapse navbar-collapse" id="navbar-collapse-1">
          <ul class="nav navbar-nav navbar-left page_links">

            <li id="navigation_option_1" class="nav_main dropdown">
              <a href="https://bunting.com/products/shopcast#" class="dropdown-toggle ripple" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Products <span class="glyphicon glyphicon-chevron-down"></span>
              </a>
              <ul class="dropdown-menu dropdown-menu-left row">
                <li id="dropdown-menu-product-website-messenger" class="col-sm-6 ">
                  <h5 class="XS"><a href="https://bunting.com/products/shopcast" title="Social Shopping Tool"><span>Shopcast</span></a> <span class="badge">World First</span></h5>
                  <picture><a href="products/shopcast" title="Social Shopping Tool"><img src="https://bunting.com/media/products/shopcast/influencer_shopcast.jpg" class="img-responsive"></a></picture>
                  <p>Shopcast is the anticipated world first ecommerce tool that allows your brand ambassadors to bring legions of engaged shoppers to your site. With Shopcast visitors stay longer, and buy more.</p>
                </li>
                <li id="dropdown-menu-product-personalization-cloud" class="col-sm-6 ">
                  <h5 class="XS"><a href="https://bunting.com/products/personalization-cloud" title="Website Optimization Software"><span>Personalization Cloud</span></a></h5>
                  <picture><a href="products/personalization-cloud" title="Personalization Cloud"><img src="https://bunting.com/media/products/personalization-cloud/personalized_content.jpg" class="img-responsive"></a></picture>
                  <p>Make every online interaction with your customers feel infinitely more tailored with targeted content that builds trust quickly and persuades people to shop with you more often.</p>
                </li>
              </ul>
            </li>


            <li id="navigation_option_2" class="nav_main dropdown">
              <a href="https://bunting.com/products/shopcast#" class="dropdown-toggle ripple" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                Pricing <span class="glyphicon glyphicon-chevron-down"></span>
              </a>
              <ul class="dropdown-menu dropdown-menu-left">
                <li><a href="https://bunting.com/pricing/shopcast" title="Shopcast">Shopcast</a></li>
                <li><a href="https://bunting.com/pricing/personalization-cloud" title="Personalization Cloud">Personalization Cloud</a></li>
              </ul>
            </li>


            <li id="navigation_option_3" class="nav_main">
              <a href="https://bunting.com/customers" class="ripple">
                Customers
              </a>
            </li>


            <li id="navigation_option_4" class="nav_main">
              <a href="https://bunting.com/company/about" class="ripple">
                About Us
              </a>
            </li>

          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!--<li id="navigation_option_5"><a href="https://bunting.com/products/shopcast-preview-release/register" class="button embolden" target="_blank">Request<span class="hidden-sm hidden-md"> Free Early</span> Access</a></li>-->
            <li id="navigation_option_6" class="nav_main"><a href="https://bunting.com/products/shopcast#" class="user_login">Log In</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div id="body">
    <div id="content">
      <div class="container-fluid crumbtrail" id="crumbtrail-top">
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
      <div id="section-masthead">
        <div class="container">
          <div class="row">
            <div class="col-sm-9 mobile-view">
              <?php
                if (is_front_page()){
                  ?>
                    <h3 class="XL">Bunting Knowledgebase</h3>
                    <p class="emphasis">Here you can learn best practices and tutorials on how to utilise the Bunting platform.
                  <?php
                }
              ?></p>
              <div class="posts">
                <hr />
                <div class="post">
                  <?php
                  if (have_posts()) {
                    	while (have_posts()){
                        the_post(); ?>
                  <h1 class="L"><?php the_title();?></h1>
                  <p><?php
                    if (is_front_page()){
                      the_excerpt();
                    }
                    else {
                      the_content();
                    }
                  ?></p>
                  <?php
                    if (is_front_page() || is_category()){
                      ?><small>By: <?php the_author(); ?></small> <small><?php the_date(); ?></small> <small><?php the_tags(); ?></small> <p class="cta mt"><a href="<?php the_permalink();?>" class="button">Read More</a></p><hr /><?php
                    }
                  ?>
                  <?php } } ?>
                  <section class="wp-pagination mb"><?php pagination_bar(); ?></section>
                </div>
              </div>
            </div>
            <div class="col-sm-3 categories-listing">

              <div class="mobile-categories-menu-item" >
                <i class="fas fa-times close-button"></i>
                <i class="fas fa-bars show-button"></i>
              </div>

              <h4 class="M XS categories-right">Categories</h4>

              <div class="mobile-categories-menu">
                <ul>
                  <?php

                    $categories = get_categories( array(
                        'orderby' => 'name',
                        'order'   => 'ASC'
                    ) );

                    foreach( $categories as $category ) {
                     echo '<li><a href="' . get_category_link($category->term_id) . '">' . $category->name . '</a></li>';
                   }
                 ?>
                </ul>
                <?php get_search_form( $echo = true ) ?>
              </div>
            </div>
          </div>
        </div>
      </div>

  <?php
   get_footer();
  ?>
