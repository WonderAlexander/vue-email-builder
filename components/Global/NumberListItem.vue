<script setup>
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';
    const props = defineProps(['placeholder', 'content', 'src', 'count']);
    const editable = ref(false);
    const newSrc = ref(props.src);
    const newContent = ref(props.content);
    const toolBarOptions =    [
        ['bold', 'italic', 'underline', 'strike'], 
                        

        [{ 'size': ['small', false, 'large', 'huge'] }],  

        [{ 'color': [] }],
        ['link'],       

        ['clean']                                    
    ];
</script>

<template>
    <tr>                                                            
        <td class="s_block_0" bgcolor="#f7f7f7" align="left" valign="middle" style="padding: 5px 0;color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#f7f7f7;">
            <div class="components-item__actions">
                <div class="component__handle">
                    <img src="https://pic.mos.ru/srv/images/60d6a2d5f01d22843ff8136e6a4940f7.png" alt="">
                </div>
                <div class="delete__btn" @click="editable = true">
                    <img src="https://pic.mos.ru/srv/images/8d055ffd6bbe89b02f1673a6bfc2bf8b.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteComponent')">
                    <img src="https://pic.mos.ru/srv/images/c72c7fce459fd26c785ab0ca7dffeb94.png" alt="">
                </div>
            </div>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td v-if="!editable" bgcolor="#f7f7f7" width="40" align="left" valign="top" style="min-width: 40px !important;"><img :src="newSrc" width="25" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:25px;outline:0;text-decoration:none;width:25px !important;height: auto; padding:0; background: #f7f7f7" alt="1"></td>
                    <td bgcolor="#f7f7f7" align="left" valign="middle" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#f7f7f7;">
                        <p v-if="!editable" v-html="newContent" style="margin: 0; padding: 0;"></p>
                        <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editBullet', newContent), $emit('editSrc', newSrc)">
                            <quill-editor v-model:content="newContent" contentType="html" theme="snow" :toolbar="toolBarOptions" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px;"></quill-editor>
                            <label for="imgSrc">Ссылка на картинку<br><span style="font-size: 12px;">Все изображения должны размещаться на сервисе <a href="https://pic.mos.ru/app/filebrowser/login?redirect=%2Ffiles%2F" target="_blank" style="color: #ff0000; text-decoration: underline;">pic.mos.ru</a></span></label>
                            <div class="edit__form-inputs" style="margin-bottom: 10px;">
                                <input type="text" v-model="newSrc" id="src">
                                <button><img src="https://pic.mos.ru/srv/images/306535e23b056fc65524690810704fe0.png" alt="Готово"></button>
                            </div>
                            <button type="submit" class="text__change-btn">Сохранить</button>
                        </form>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>
