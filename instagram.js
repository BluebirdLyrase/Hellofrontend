

$(function(){


    $.get('instagram.json',function(data,status){
        console.log(data + "---" + status);
        console.log(data['12'] + "---" + status);
        $('#location').append(data.graphql['location'].name);
        $('#slug').append(data.graphql['location'].slug);
        $('#count').append(data.graphql['location'].edge_location_to_top_posts.count);

        $.each(data.graphql.location.edge_location_to_top_posts.edges, function(index, item) {
            console.log(index + "+++" + item["node"]["id"]);
            console.log(index + "***" + item.node.display_url);
            
            $('#what').append(`<div><img src='${item.node.display_url}'></img></div>`);
            $('#what').append(item.node.edge_media_to_caption.edges[0].node.text);
            $('#what').append('<hr>');
            
          });

        imageURL1 = data.graphql.location.edge_location_to_top_posts.edges[6].node.display_url;
          $('#img').attr('src',imageURL1);
          
          
        $.each(data.graphql.location.edge_location_to_top_posts.edges, function(index, item) {
            imageURL = item.node.display_url;
            $('#row').append("<div class='col-4'><img src='"+imageURL+"'></img></div>");
        });
    })


// $(document).ready(function(){



// });

});