

$(function () {


//     $.get('instagram.json', function (data, status) {
//         console.log(data + "---" + status);
//         console.log(data['12'] + "---" + status);
//         $('#location').append(data.graphql['location'].name);
//         $('#slug').append(data.graphql['location'].slug);
//         $('#count').append(data.graphql['location'].edge_location_to_top_posts.count);

//         $.each(data.graphql.location.edge_location_to_top_posts.edges, function (index, item) {
//             console.log(index + "+++" + item["node"]["id"]);
//             console.log(index + "***" + item.node.display_url);

//             $('#what').append(`<div><img src='${item.node.display_url}'></img></div>`);
//             $('#what').append(item.node.edge_media_to_caption.edges[0].node.text);
//             $('#what').append('<hr>');

//         });

//         imageURL1 = data.graphql.location.edge_location_to_top_posts.edges[6].node.display_url;
//         //   $('#img').attr('src',imageURL1);


//         $.each(data.graphql.location.edge_location_to_top_posts.edges, function (index, item) {
//             imageURL = item.node.display_url;
//             comment = item.node.edge_media_to_comment.count;
//             like = item.node.edge_media_preview_like.count;
//             caption = item.node.edge_media_to_caption.edges[0].node.text;
//             $('#row').append(`<div class='col-4'>
//             <img src='${imageURL}' width="320" height="320"></img>
//             <div class='col'>Comment : ${comment}</div>
//             <div class='col'>Like : ${like}</div>
//             <div class="card text-left border-0">
//             ${caption}
//   </div>

//             </div>`);
//         });
//     })

// $.get('https://www.instagram.com/explore/tags/prayut/?__a=1', function (data, status) {
//     console.log(data + "---" + status);
//     console.log(data['12'] + "---" + status);
//     $('#location').append(data.graphql['hashtag'].name);
//     $('#slug').append(data.graphql['hashtag'].slug);
//     $('#count').append(data.graphql['hashtag'].edge_hashtag_to_media.count);

//     imageURL1 = data.graphql.hashtag.edge_hashtag_to_media.edges[6].node.display_url;
//     //   $('#img').attr('src',imageURL1);


//     $.each(data.graphql.hashtag.edge_hashtag_to_media.edges, function (index, item) {
//         imageURL = item.node.display_url;
//         comment = item.node.edge_media_to_comment.count;
//         like = item.node.edge_media_preview_like.count;
//         caption = item.node.edge_media_to_caption.edges[0].node.text;
//         $('#row').append(`<div class='col-4'>
//         <img src='${imageURL}' width="320" height="320"></img>
//         <div class='col'>Comment : ${comment}</div>
//         <div class='col'>Like : ${like}</div>
//         <div class="card text-left border-0">
//         ${caption}
// </div>

//         </div>`);
//     });
// })

$('#btn').click(function () {
    var url = `https://www.instagram.com/explore/tags/${$('#tag').val()}?__a=1`
    console.log(url);


$.get(url, function (data, status) {
    console.log(data + "---" + status);
    console.log(data['12'] + "---" + status);
    $('#location').empty().append(data.graphql['hashtag'].name);
    $('#slug').empty().append(data.graphql['hashtag'].slug);
    $('#count').empty().append(data.graphql['hashtag'].edge_hashtag_to_media.count);

    imageURL1 = data.graphql.hashtag.edge_hashtag_to_media.edges[6].node.display_url;
    //   $('#img').attr('src',imageURL1);
    $('#row').empty();

    $.each(data.graphql.hashtag.edge_hashtag_to_media.edges, function (index, item) {
        imageURL = item.node.display_url;
        comment = item.node.edge_media_to_comment.count;
        like = item.node.edge_media_preview_like.count;
        caption = item.node.edge_media_to_caption.edges[0].node.text;
        $('#row').append(`<div class='col-4'>
        <img src='${imageURL}' width="320" height="320"></img>
        <div class='col'>Comment : ${comment}</div>
        <div class='col'>Like : ${like}</div>
        <div class="card text-left border-0">
        ${caption}
</div>

        </div>`);
    });
})


    // $(document).ready(function(){



    // });

});

});