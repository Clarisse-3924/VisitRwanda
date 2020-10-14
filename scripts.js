

 $(document).ready(function(){
        $(".hike").click(function(){
            $(".hike").toggle();
            $("#hotel").toggle();
        });
       
        });
        $("#hotels").click(function(){
            $("#hotels").toggle();
            $(".hotel").toggle();
        });
        $(".hotel").click(function(){
            $("#hotels").toggle();
            $(".hotel").toggle();
        });
        $(".Culture").click(function(){
            $(".Culture").toggle();
            $("#hotel").toggle();
        });
        $("#hotel").click(function(){
            $(".Culture").toggle();
            $("#hotel").toggle();
        });

        $(".history").click(function(){
            $(".history").toggle();
            $("#hotel").toggle();
        });
        $("#hotel").click(function(){
            $(".history").toggle();
            $("#hotel").toggle();
        });


  
  
  });