        document.addEventListener("DOMContentLoaded", function () {
        });

            // console.log(document.getElementById("docEditImage_"));
        let img_id;
        function openAnnotation(e){
            // var img_id = jQuery(e).data("id");
            img_id = e.name;
            console.log(e);
            jQuery("#docEditImage_"+img_id).removeClass('hide');
            jQuery("#canvasImg_"+img_id).addClass('hide');
            jQuery("#annotation_"+img_id).addClass('hide');
            jQuery("#closeannotation_"+img_id).removeClass('hide');
            jQuery("#saveannotation_"+img_id).removeClass('hide');
            var imgurl = jQuery("#mainimgsrc_"+img_id).val();
            jQuery("#docEditImage_"+img_id).attr('src',imgurl);
            showMarkerJs(document.getElementById('docEditImage_'+img_id));
        };
        function closeAnnotation(e){
            img_id = e.name;
            jQuery("#docEditImage_"+img_id).addClass('hide');
            jQuery("#canvasImg_"+img_id).removeClass('hide');
            jQuery("#annotation_"+img_id).removeClass('hide');
            jQuery("#closeannotation_"+img_id).addClass('hide');
            jQuery("#saveannotation_"+img_id).addClass('hide');
            if(mark) {
                // console.log(mark);
                mark.close();
            }
        };

        jQuery("#docEditImage_"+img_id).click(function() {
            // console.log(this);
            showMarkerJs(this);
        })
        let mark;
        let savedState;
        function showMarkerJs(img) {
            console.log(img);
            mark = new markerjs.MarkerArea(img);
            mark.show((dataUrl, state) => {
                let changestate = JSON.stringify(state);
                // if(state.markers.length > 0) {
                //     jQuery("#saveannotation").attr('disabled', false);
                // } else {
                //     jQuery("#saveannotation").attr('disabled', true);
                // }
                // console.log(state.markers.length);
                // console.log(JSON.stringify(state));
                // savedState = state;
                img.src = dataUrl;
            });
        }

            // let previousState;
            // function showMarkerJsWithState(img) {
            //     let mark = new markerjs.MarkerArea(img, { previousState: previousState });
            //     mark.show((dataUrl, state) => {
            //         previousState = state;
            //     });
            // }

            // let markerArea;
            // let targetImg;
            // function showApiMarkerJs(img) {
            //     targetImg = img;
            //     markerArea = new markerjs.MarkerArea(img);
            //     markerArea.open();
            //     document.getElementById('apiDemoToolbar').style.visibility = 'visible';
            // }

            // function addArrow(evt) {
            //     evt.preventDefault();
            //     if (markerArea) {
            //         markerArea.addMarker(markerjs.ArrowMarker);
            //     }
            // }            

            // function renderAndClose(evt) {
            //     evt.preventDefault();
            //     if (markerArea) {
            //         markerArea.render((dataUrl) => {
            //             targetImg.src = dataUrl;
            //             console.log(dataUrl);
            //             markerArea.close();
            //             document.getElementById('apiDemoToolbar').style.visibility = 'hidden';
            //         });
            //     }
            // }

            // function showPayPalLogoInstructions(evt) {
            //     showRemoveLogoInstructions('paypalRemoveLogo', evt);
            // }
            // function showFreeLogoInstructions(evt) {
            //     showRemoveLogoInstructions('freeRemoveLogo', evt);
            // }
            // function showRemoveLogoInstructions(elementId, evt) {
            //     evt.preventDefault();
            //     document.getElementById(elementId).style.display = 'block';
            // }