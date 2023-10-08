<script setup>
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';
    const props = defineProps(['placeholder', 'content', 'html']);
    const editable = ref(false);
    const newContent = ref(props.content);
    const newIcon = ref(props.html);
    const toolBarOptions =    [
        ['bold', 'italic', 'underline', 'strike'], 
                        

        [{ 'size': ['small', false, 'large', 'huge'] }],  

        [{ 'color': [] }],
        ['link'],       

        ['clean']                                    
    ];

    const icons = ref([
        {   
            name: 'Восклицательный знак',
            img: 'https://pic.mos.ru/srv/images/79fea96a878fd8dd16fc0c50346aa8a0.png',
            html: `<img src="https://pic.mos.ru/srv/images/79fea96a878fd8dd16fc0c50346aa8a0.png" width="24" style="border:none;display:block; width:24px; outline:0; height: auto;">`,
        },
        {   
            name: 'Галочка',
            img: 'https://pic.mos.ru/srv/images/3b2e0aae67bfd59563d62c3a863a12e0.png',
            html: '<img src="https://pic.mos.ru/srv/images/3b2e0aae67bfd59563d62c3a863a12e0.png" width="25" style="border:none;display:block; width:25px; outline:0; height: auto;">',
        },
        {
            name: 'Внимание',
            img: 'https://pic.mos.ru/srv/images/a3788cba48fe13cca08ce8f5594f775e.png',
            html: '<img src="https://pic.mos.ru/srv/images/a3788cba48fe13cca08ce8f5594f775e.png" width="28" style="border:none;display:block; width:28px; outline:0; height: auto;">'
        },
        {
            name: 'Хлопушки',
            img: 'https://pic.mos.ru/srv/images/198c7fe06ef8ea58a41ae1f7c575e212.png',
            html: '<img src="https://pic.mos.ru/srv/images/198c7fe06ef8ea58a41ae1f7c575e212.png" width="80" style="border:none;display:block; width:80px; outline:0; height: auto;">'
        }
    ])
</script>

<style scoped lang="scss">
    .btn__img-block {
        display: flex;
        flex-wrap: wrap;
        height: 50px;
        overflow: auto;
    }

    .btn__wrapper {
        cursor: pointer;
        img {
            width: 80%;
        }
    }
</style>

<template>
    <tr> 
        <td class="s_block_0" bgcolor="#f7f7f7" align="left" valign="middle" style="padding: 0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#f7f7f7;">
            <div class="components__actions">
                <div class="component__handle">
                    <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                </div>
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/2b2101003755ca4ff95c055e73a07ee5.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteComponent')">
                    <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                </div>
            </div>
            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td bgcolor="#f7f7f7" width="40" align="left" valign="top" v-html="newIcon">
                    </td>
                    <td bgcolor="#f7f7f7" align="left" valign="middle" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#f7f7f7;">
                        <p v-html="newContent" style="margin: 0;"></p>
                        <form v-if="editable" @submit="editable = false, $emit('editContent', newContent), $emit('editHtml', newIcon)">
                            <div class="edit__form">
                                <quill-editor v-model:content="newContent" contentType="html" theme="snow" :toolbar="toolBarOptions" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px;"></quill-editor>
                            </div>
                            <div class="edit__form">
                                <label for="imgSrc">Выберите иконку</label>
                                    <div style="margin-bottom: 10px;" class="edit__form-inputs btn__img-block">
                                        <div 
                                            class="btn__wrapper" 
                                            v-for="icon in icons"
                                            @click="newIcon = icon.html"
                                        >
                                            <img :src="icon.img" alt="">
                                        </div>
                                    </div>
                            </div>
                            <button type="submit" class="form-btn text__change-btn">Сохранить</button>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>
                        
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>