$(document).ready(function(){
    $("#unimportant_fabrics").click(function(){
        $(".fabrics_expand_li").toggle("slow");
    });

    $("#unimportant_threads").click(function(){
        $(".threads_expand_li").toggle("slow");
    });

    $("#unimportant_cotton").click(function(){
        $(".cotton_expand_li").toggle("slow");
    });

    $(".hamburger_categories").click(function(){
        $(".sidebar").toggle("slow");
    });
});

$(function(){
  $(".columns_alpha").delay( 500 ).fadeIn( 500 );
  $(".columns_beta").delay( 500 ).fadeIn( 500 );
  $(".columns_omega").delay( 500 ).fadeIn( 500 );
});
