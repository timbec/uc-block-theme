<?php

while(have_posts()) {
    the_post();
     ?>

    <div class="container container--narrow page-section">
          
      </div>

      <div class="generic-content"><?php the_field('main_body_content'); ?></div>


<?php } ?>