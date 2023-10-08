<script setup>
    import { QuillEditor } from '@vueup/vue-quill';
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';
    const props = defineProps(['personName', 'src']);
    const editable = ref(false);
    const personName = ref(props.personName);
    const newSrc = ref(props.src);
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
                    <td v-if="!editable" bgcolor="#f7f7f7" width="115" align="left" valign="top"><img :src="newSrc" width="95" style="-ms-interpolation-mode:bicubic;border:none;clear:both;display:block;max-width:95px;outline:0;text-decoration:none;width:100%;height: auto; padding:0; background: #f7f7f7" alt=""></td>
                    <td bgcolor="#f7f7f7" align="left" valign="middle" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px; background:#f7f7f7;">
                        <p v-if="!editable" v-html="personName" style="margin: 0; padding: 0;"></p>
                        <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editPerson', personName), $emit('editSrc', newSrc)">
                            <quill-editor v-model:content="personName" contentType="html" theme="snow" :toolbar="toolBarOptions" style="padding:0; color: #000000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, sans-serif; line-height: 20px;"></quill-editor>
                            <button class="text__change-btn" type="submit">Сохранить</button>
                        </form>
                        <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editPerson', personName), $emit('editSrc', newSrc)">
                            <label for="imgSrc">Ссылка на фото сотрудника (не более 200кб)<br><span style="font-size: 12px;">Все изображения должны размещаться на сервисе <a href="https://pic.mos.ru/app/filebrowser/login?redirect=%2Ffiles%2F" target="_blank" style="color: #ff0000; text-decoration: underline;">pic.mos.ru</a></span></label>
                            <div class="edit__form-inputs">
                                <input type="text" v-model="newSrc" id="src">
                                <button type="submit"><img src="https://pic.mos.ru/srv/images/306535e23b056fc65524690810704fe0.png" alt="Готово"></button>
                            </div>
                        </form>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>
