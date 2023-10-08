<script setup>
    // Imports
    import { useBodyStore } from '~/stores/body';
    import { storeToRefs } from 'pinia'
    import draggable from 'vuedraggable';



    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';
    const toolBarOptions =    [
        ['bold', 'italic', 'underline', 'strike'], 
                        

        [{ 'size': ['small', false, 'large', 'huge'] }],  

        [{ 'color': [] }],
        ['link'],       

        ['clean']                                    
    ];

    const editable = ref(false);
    
    const emailBody = useBodyStore();

    const newPreheader = ref(emailBody.body[0].preheader);


    // Export html
    const exportHTML = () => {
        const link = document.createElement("a");
        const link2 = document.createElement("a");

        // Apply media and styles
        document.querySelector('.flexible').style.background = '#ffffff';
        document.querySelector('.email__head').innerHTML = `
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />        
        <style type="text/css">
        p {
            margin: 0 !important;
            padding: 0 !important;
        }
        .handle {
            background-color: #ff0000;
            border-radius: 25px;
            width: 25px;
            height: 25px;
            cursor: move;
            position: absolute;
            top: -15px;
            left: -15px;
            z-index: 1000;
            text-align: center;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all ease-in-out .1s;
        }

        .component__handle {
            background-color: #ff0000;
            border-radius: 25px;
            width: 25px;
            height: 25px;
            cursor: move;
            position: absolute;
            top: -15px;
            left: -15px;
            z-index: 1000;
            text-align: center;
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all ease-in-out .1s;
        }

        .components__actions {
        position: absolute; 
        top: -15px; 
        right: -2px; 
        z-index: 1000; 
        display: none;
    }

    .components-item__actions {
        position: absolute; 
        top: -15px; 
        right: 12px; 
        z-index: 1000; 
        display: none;
    }

    .block__actions {
        position: absolute; 
        top: -15px; 
        right: -2px; 
        z-index: 1000; 
        display: none;
    }
            a[x-apple-data-detectors]{color: inherit !important; text-decoration: none !important;}
            a[href^="tel"]:hover{text-decoration: none !important;}
            table td{mso-line-height-rule: exactly;}
            a img{border: none;}
            img{width:auto;height:auto;border:none;}
            th{padding: 0;border-collapse:collapse!important;}
            td{text-decoration: none;border-collapse:collapse!important;}
            h1,h2,h3,h4,h5,h6{display:block;margin:0;padding:0;}
            @media only screen and (max-width:375px) and (min-width:374px) {.gmail-fix{min-width:374px !important;}}
            @media only screen and (max-width:414px) and (min-width:413px) {.gmail-fix{min-width:413px !important;}}
            @media only screen and (max-width:590px) {
                .flexible{width: 100% !important;}
                .img-flex img{width: 100% !important; height: auto !important;}
                .stretch{display: table !important; width: 100% !important;}
                .acenter{text-align: center!important;}
                .nobr {display:none!important;}
                .p10px {padding-left:10px!important;padding-right:10px!important;}
                .p30px {padding-left:30px!important;padding-right:30px!important;}
                .pt20px {padding-top:20px!important;}
                .s_title {font-size:20px!important;}
                .s_block_0 {padding:5px 20px 0 20px !important;}
                .s_block {padding:5px 20px 5px 20px !important;}
            }
            @media only screen and (max-width:330px) {
                .p10px {padding-left:15px!important;padding-right:15px!important;}
            }
        </style>`

        const content = document.querySelector('.email__inner').innerHTML;
        const store = JSON.stringify(emailBody.body);
        const file = new Blob([content], { type: 'text/html' });
        const file2 = new Blob([store], { type: 'text/html' });
        link.href = URL.createObjectURL(file);
        link2.href = URL.createObjectURL(file2);
        link.download = "письмо.txt";
        link2.download = "шаблон.txt";
        link.click();
        link2.click();
        URL.revokeObjectURL(link.href);
        URL.revokeObjectURL(link2.href);

        document.querySelector('.email__head').innerHTML = `
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />        
        <style type="text/css">
        
    .ql-editor {
        padding: 12px 5px;
    }

    .export__btn {
        display: block;
        margin: 20px auto;
        // position: fixed;
        // bottom: 25px;
        // z-index: 10000;
        // left: 58%;

        background-color: transparent;
        border: 1px solid #ff0000;
        border-radius: 12px;
        padding: 16px 32px;

        font-family: Helvetica, Arial, sans-serif;
        font-size: 20px;
        font-weight: 300;
        color: #ff0000;

        cursor: pointer;

        transition: all .1s ease-in-out;
    }

    .export__btn:hover {
        background-color: #ff0000;
        color: #ffffff;
    }

    .white {
        background-color: #ffffff !important;
    }

    .delete__btn {
        background-color: #ff0000;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;

        img {
            width: 15px;
            height: 15px;
        }
    }

    .add__btn {
        background-color: #ff0000;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;

        margin-right: 5px;

        img {
            width: 15px;
            height: 15px;
        }
    }

    .components__actions {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -20px;
        z-index: 1000;
        flex-direction: column;
        display: none;

        .add__btn, .delete__btn, .component__handle {
            width: 25px;
            height: 25px;
            margin-bottom: 3px;

            img {
                width: 13px;
                height: 13px;
            }
        }
    }

    .components-item__actions {
        position: absolute; 
        top: -15px; 
        right: 12px; 
        z-index: 1000; 
        display: none;

        .add__btn, .delete__btn, .component__handle {
            width: 25px;
            height: 25px;
            margin-right: 3px;
            background-color: #f7f7f7;
            box-shadow: 0px 0px 10px -1px rgba(34, 60, 80, 0.2);

            img {
                width: 13px;
                height: 13px;
            }
        }
    }

    .block__actions {
        position: absolute; 
        top: -15px; 
        right: -2px; 
        z-index: 1000; 
        display: none;
    }


    p {
        margin: 0;
    }
    .email__body {
        width: 100%;
        height: auto;
        min-height: 100vh;
        padding-left: 370px;
        padding-bottom: 300px;
    }

        .handle {
            background-color: #ff0000;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            text-align: center;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            cursor: pointer;

            margin-right: 5px;

            img {
                width: 15px;
                height: 15px;
            }
        }

        .component__handle {
            background-color: #ff0000;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            text-align: center;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            cursor: pointer;

            margin-right: 5px;

            img {
                width: 15px;
                height: 15px;
            }
        }

    .email__block {
        outline: 1px solid transparent;
        transition: all .2s ease-in-out;
        position: relative;

        &:hover {
            outline: 1px solid #ff0000;
        }

    }

    .email__component {
        // outline: 1px solid transparent;
        transition: all .2s ease-in-out;
        position: relative;

        &:hover {
            outline: 1px solid #ff0000;
        }
    }

    .email__component-item {
        // outline: 1px solid transparent;
        transition: all .2s ease-in-out;
        position: relative;

        &:hover {
            outline: 1px solid #ff0000;
        }
    }

    .email__block:hover .block__actions {
        display: flex !important;
    }

    .email__component:hover .components__actions {
        display: flex !important;
    }

    .email__component-item:hover .components-item__actions {
        display: flex !important;
    }


    .email__component:hover .block__actions {
        display: none !important;
    }

    tr {
        vertical-align: top;
    }

      a[x-apple-data-detectors]{color: inherit !important; text-decoration: none !important;}
            a[href^="tel"]:hover{text-decoration: none !important;}
            table td{mso-line-height-rule: exactly;}
            a img{border: none;}
            img{width:auto;height:auto;border:none;}
            th{padding: 0;border-collapse:collapse!important;}
            td{text-decoration: none;border-collapse:collapse!important;}
            h1,h2,h3,h4,h5,h6{display:block;margin:0;padding:0;}
            @media only screen and (max-width:375px) and (min-width:374px) {.gmail-fix{min-width:374px !important;}}
            @media only screen and (max-width:414px) and (min-width:413px) {.gmail-fix{min-width:413px !important;}}
            @media only screen and (max-width:590px) {
                .flexible{width: 100% !important;}
                .img-flex img{width: 100% !important; height: auto !important;}
                .stretch{display: table !important; width: 100% !important;}
                .acenter{text-align: center!important;}
                .nobr {display:none!important;}
                .p10px {padding-left:10px!important;padding-right:10px!important;}
                .p30px {padding-left:30px!important;padding-right:30px!important;}
                .pt20px {padding-top:20px!important;}
                .s_title {font-size:20px!important;}
                .s_block_0 {padding:5px 20px 0 20px !important;}
                .s_block {padding:5px 20px 5px 20px !important;}
            }
            @media only screen and (max-width:330px) {
                .p10px {padding-left:15px!important;padding-right:15px!important;}
            }

.edit__form {
    padding: 15px;
    border-radius: 12px;
    /* border: 1px solid #000; */
    width: 100%;
    background-color: #ffffff;
    max-width: 515px;
    text-align: left;
    -webkit-box-shadow: -1px 0px 5px 0px rgba(124, 131, 136, 0.2);
    -moz-box-shadow: -1px 0px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: -1px 0px 5px 0px rgba(34, 60, 80, 0.2);
    margin: 10px 0;

    .edit__form-inputs {
        display: flex;
    }

    input {
        width: 100%;
        display: inline-block;
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #808080;
        outline: none;
        font-family:  Helvetica, Arial, sans-serif;
    }

    label {
        color: #808080;
        margin-bottom: 3px !important;
        display: block;
        font-family:  Helvetica, Arial, sans-serif !important;
        font-weight: 500 !important;
    }

    button {
        display: inline-block;
        margin: 0;
        background-color: #ff0000;
        border-radius: 7px;
        margin-left: 3px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: none;
        outline: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 15px;
            height: 15px;
        }
    }
}

.form-btn {
        display: inline-block;
        margin: 0;
        background-color: #ff0000;
        border-radius: 3px;
        margin-left: -3px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: none;
        outline: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 15px;
            height: 15px;
        }
    }

.text__change-btn {
    width: auto !important;
    padding: 10px;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
}

.ql-toolbar.ql-snow {
    border: none !important;
    padding: 0 !important;
}

.ql-container.ql-snow {
    border: none !important;
}

.edit__btn {
    display: inline-block;
    margin: 0;
    background-color: #ff0000;
    border-radius: 3px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    outline: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
            width: 15px;
            height: 15px;
        }
}
        </style>`
    }

</script>

<template>

    
    <div class="email__body" style="background-color: #f7f7f7;">
        <!-- <input type="text" v-model="editEmail">
        <button @click="emailBody.body = JSON.parse(editEmail)">Push</button> -->
        <div v-if="emailBody.body.length > 2" class="email__block" style=" width: 600px; margin: 0 auto;">
        <div style="padding: 0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:transparent; position: relative;">
            <div class="block__actions">
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/2b2101003755ca4ff95c055e73a07ee5.png" alt="">
                </div>
            </div>

            <p v-if="!editable" style="margin: 0; padding: 0; color: #808080; margin-bottom: 15px; font-style: italic;">Прехедер макета рассылки: <span style="color: #000; font-style: normal;">{{ emailBody.body[0].preheader }}</span></p>
            <form class="edit__form" v-if="editable"  @submit="editable = false, emailBody.editPreheader(newPreheader)">
                <quill-editor v-model:content="newPreheader" contentType="text" theme="snow" :toolbar="toolBarOptions" style="padding: 0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:transparent; position: relative;"></quill-editor>
                <button type="submit" class="text__change-btn">Сохранить</button>
            </form>
            
        </div>
    </div>
        <div class="email__inner">
            


        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
            <head class="email__head">
                <title></title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap" rel="stylesheet">
                <meta class="view" name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body bgcolor="#f7f7f7" style="margin:0; padding:0; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">

                <table class="gmail-fix" width="100%" style="min-width:320px; margin:0; padding:0;" cellspacing="0" cellpadding="0">
                    <tr>
                        <td style="color: #ffffff; font-size: 0px; line-height: 0px; margin: 0; max-height: 0px; mso-hide: all; opacity: 0; overflow: hidden; padding: 0;">
                            {{ emailBody.body[0].preheader }}
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#f7f7f7">
                            <!--[if (gte mso 9)|(IE)]>
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:600px;border-spacing:0;border-collapse:collapse;" >
                                    <tbody>
                                        <tr>
                                            <td align="center" valign="top" width="600" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
                            <![endif]-->
                           
                                <table class="flexible" width="600" align="center" cellpadding="0" cellspacing="0" style="margin: 0px auto;">
                                    <tr style="padding: 0; margin: 0;">
                                        <td style="padding: 0; margin: 0;">
                                            <draggable 
                                                v-model="emailBody.body" 
                                                :group="{ name: 'builder'}" 
                                                item-key="id"
                                                tag="table"
                                                handle=".handle"
                                                class="flexible"
                                                :class="{ white: emailBody.body.length > 2}"
                                                width="100%" 
                                                align="center"
                                                style="width: 100%;" cellpadding="0" cellspacing="0"
                                            >

                                                <template #item="{ element: block }">
                                                    <component
                                                        :is="resolveComponent(block.name)" 
                                                        :block="block"
                                                        :src="block.src"
                                                        :link="block.link"
                                                        :content.sync="block.content"
                                                        :html="block.html"
                                                        :inner="block.inner"
                                                        :preheader="block.preheader"
                                                        @delete-block="emailBody.deleteBlock(block)"
                                                        @edit-content="(newContent) => block.content = newContent"
                                                        @edit-src="(newSrc) => block.src = newSrc"
                                                        @edit-button="(newButton) => block.html = newButton"
                                                        @edit-link="(newLink) => block.link = newLink"
                                                        @edit-inner="(newInner) => block.inner = newInner"
                                                        @edit-preheader="(newPreheader) => block.preheader = newPreheader"
                                                    ></component>
                                                </template>
                                            </draggable>
                                        </td>
                                    </tr>
                                </table>
                                
      
                                 <!--[if (gte mso 9)|(IE)]>
                            </td>
                        </tr>
                    <tbody>
                </table>
                <![endif]-->
                        </td>
                    </tr>
                </table>
            </body>
        </html>
        </div>
        <button class="export__btn" @click="exportHTML">ЭКСПОРТ</button>
    </div>
</template>

<style lang="scss">

    .ql-editor {
        padding: 12px 5px;
    }


    .export__btn {
        display: block;
        margin: 20px auto;
        // position: fixed;
        // bottom: 25px;
        // z-index: 10000;
        // left: 58%;

        background-color: transparent;
        border: 1px solid #ff0000;
        border-radius: 12px;
        padding: 16px 32px;

        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: 300;
        color: #ff0000;

        cursor: pointer;

        transition: all .1s ease-in-out;
    }

    .export__btn:hover {
        background-color: #ff0000;
        color: #ffffff;
    }

    .white {
        background-color: #ffffff !important;
    }

    .delete__btn {
        background-color: #ff0000;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;

        img {
            width: 15px;
            height: 15px;
        }
    }

    .add__btn {
        background-color: #ff0000;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;

        margin-right: 5px;

        img {
            width: 15px;
            height: 15px;
        }
    }

    .components__actions {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: -20px;
        z-index: 1000;
        flex-direction: column;
        display: none;

        .add__btn, .delete__btn, .component__handle {
            width: 25px;
            height: 25px;
            margin-bottom: 3px;

            img {
                width: 13px;
                height: 13px;
            }
        }
    }

    .components-item__actions {
        position: absolute; 
        top: -15px; 
        right: 12px; 
        z-index: 1000; 
        display: none;

        .add__btn, .delete__btn, .component__handle {
            width: 25px;
            height: 25px;
            margin-right: 3px;
            background-color: #f7f7f7;
            box-shadow: 0px 0px 10px -1px rgba(34, 60, 80, 0.2);

            img {
                width: 13px;
                height: 13px;
            }
        }
    }

    .block__actions {
        position: absolute; 
        top: -15px; 
        right: -2px; 
        z-index: 1000; 
        display: none;
    }


    p {
        margin: 0;
    }
    .email__body {
        width: 100%;
        height: auto;
        min-height: 100vh;
        padding-left: 370px;
        padding-bottom: 300px;
    }

        .handle {
            background-color: #ff0000;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            text-align: center;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            cursor: pointer;

            margin-right: 5px;

            img {
                width: 15px;
                height: 15px;
            }
        }

        .component__handle {
            background-color: #ff0000;
            width: 30px;
            height: 30px;
            border-radius: 5px;
            text-align: center;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
            cursor: pointer;

            margin-right: 5px;

            img {
                width: 15px;
                height: 15px;
            }
        }

    .email__block {
        outline: 1px solid transparent;
        transition: all .2s ease-in-out;
        position: relative;

        &:hover {
            outline: 1px solid #ff0000;
        }

    }

    .email__component {
        // outline: 1px solid transparent;
        transition: all .2s ease-in-out;
        position: relative;

        &:hover {
            outline: 1px solid #ff0000;
        }
    }

    .email__component-item {
        // outline: 1px solid transparent;
        transition: all .2s ease-in-out;
        position: relative;

        &:hover {
            outline: 1px solid #ff0000;
        }
    }

    .email__block:hover .block__actions {
        display: flex !important;
    }

    .email__component:hover .components__actions {
        display: flex !important;
    }

    .email__component-item:hover .components-item__actions {
        display: flex !important;
    }


    .email__component:hover .block__actions {
        display: none !important;
    }

    // .email__block:hover .handle {
    //     display: block;
    // }

    // .email__component:hover .component__handle {
    //     display: block;
    // }

    // .ql-editor {
    //     font-size: 16px;
    //     font-weight: 300;
    //     font-family: Helvetica, Arial, sans-serif;
    //     line-height: 20px;
    // }

    tr {
        vertical-align: top;
    }

      a[x-apple-data-detectors]{color: inherit !important; text-decoration: none !important;}
            a[href^="tel"]:hover{text-decoration: none !important;}
            table td{mso-line-height-rule: exactly;}
            a img{border: none;}
            img{width:auto;height:auto;border:none;}
            th{padding: 0;border-collapse:collapse!important;}
            td{text-decoration: none;border-collapse:collapse!important;}
            h1,h2,h3,h4,h5,h6{display:block;margin:0;padding:0;}
            @media only screen and (max-width:375px) and (min-width:374px) {.gmail-fix{min-width:374px !important;}}
            @media only screen and (max-width:414px) and (min-width:413px) {.gmail-fix{min-width:413px !important;}}
            @media only screen and (max-width:590px) {
                .flexible{width: 100% !important;}
                .img-flex img{width: 100% !important; height: auto !important;}
                .stretch{display: table !important; width: 100% !important;}
                .acenter{text-align: center!important;}
                .nobr {display:none!important;}
                .p10px {padding-left:10px!important;padding-right:10px!important;}
                .p30px {padding-left:30px!important;padding-right:30px!important;}
                .pt20px {padding-top:20px!important;}
                .s_title {font-size:20px!important;}
                .s_block_0 {padding:5px 20px 0 20px !important;}
                .s_block {padding:5px 20px 5px 20px !important;}
            }
            @media only screen and (max-width:330px) {
                .p10px {padding-left:15px!important;padding-right:15px!important;}
            }

.edit__form {
    padding: 15px;
    border-radius: 12px;
    /* border: 1px solid #000; */
    width: 100%;
    background-color: #ffffff;
    max-width: 515px;
    text-align: left;
    -webkit-box-shadow: -1px 0px 5px 0px rgba(124, 131, 136, 0.2);
    -moz-box-shadow: -1px 0px 5px 0px rgba(34, 60, 80, 0.2);
    box-shadow: -1px 0px 5px 0px rgba(34, 60, 80, 0.2);
    margin: 10px 0;

    .edit__form-inputs {
        display: flex;
    }

    input {
        width: 100%;
        display: inline-block;
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #808080;
        outline: none;
        font-family:  Helvetica, Arial, sans-serif;
    }

    label {
        color: #808080;
        margin-bottom: 3px !important;
        font-size: 15px;
        line-height: 1.2;
        display: block;
        font-family:  Helvetica, Arial, sans-serif !important;
        font-weight: 500 !important;
    }

    button {
        display: inline-block;
        margin: 0;
        background-color: #ff0000;
        border-radius: 7px;
        margin-left: 3px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: none;
        outline: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 15px;
            height: 15px;
        }
    }
}

.form-btn {
        display: inline-block;
        margin: 0;
        background-color: #ff0000;
        border-radius: 3px;
        margin-left: -3px;
        width: 30px;
        height: 30px;
        cursor: pointer;
        border: none;
        outline: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            width: 15px;
            height: 15px;
        }
    }

.text__change-btn {
    width: auto !important;
    padding: 10px;
    color: #ffffff;
    font-family: Helvetica, Arial, sans-serif;
}

.ql-toolbar.ql-snow {
    border: none !important;
    padding: 0 !important;
}

.ql-container.ql-snow {
    border: none !important;
}

.edit__btn {
    display: inline-block;
    margin: 0;
    background-color: #ff0000;
    border-radius: 3px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    outline: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
            width: 15px;
            height: 15px;
        }
}
</style>