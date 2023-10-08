<script setup>
    // Props
    const props = defineProps(['html','link',]);

    // Toggle edit panel
    const editable = ref(false);

    // New data
    const newLink = ref(props.link);
    const newButton = ref(props.html)

    // Buttons
    const buttons = ref([
        {   
            name: 'Больше скидок',
            img: 'https://pic.mos.ru/srv/images/ad23377c2bf77364dc911a6144dc19ce.png',
            html: '<img src="https://pic.mos.ru/srv/images/ad23377c2bf77364dc911a6144dc19ce.png" width="150" alt="Узнать новость" align="left" style="display:block;border:0; width:150px; outline:0; text-decoration:none;  height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {   
            name: 'Узнать больше',
            img: 'https://pic.mos.ru/srv/images/8c74068a68456280366679c9c3f2dd62.png',
            html: '<img src="https://pic.mos.ru/srv/images/8c74068a68456280366679c9c3f2dd62.png" width="148" alt="Участвовать" align="left" style="display:block;border:none; width:148px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Задать вопрос',
            img: 'https://pic.mos.ru/srv/images/cdaf3b87023c2b5eed74efbd45f1d2dc.png',
            html: '<img src="https://pic.mos.ru/srv/images/cdaf3b87023c2b5eed74efbd45f1d2dc.png" width="145" alt="Задать вопрос" align="left" style="display:block;border:none; width:145px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Записаться',
            img: 'https://pic.mos.ru/srv/images/cf5385a335137e3a62090e69ce7e4f01.png',
            html: '<img src="https://pic.mos.ru/srv/images/cf5385a335137e3a62090e69ce7e4f01.png" width="134" alt="Участвовать" align="left" style="display:block;border:none; width:134px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {   
            name: 'Пройти опрос',
            img: 'https://pic.mos.ru/srv/images/2c839187f39e0b58ac4faa85ff8de807.png',
            html: '<img src="https://pic.mos.ru/srv/images/2c839187f39e0b58ac4faa85ff8de807.png" width="167" alt="Пройти опрос" align="left" style="display:block;border:0; width:167px; outline:0; text-decoration:none;  height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Зарегистрироваться',
            img: 'https://pic.mos.ru/srv/images/cf9645aaa96d3d15335cb28f6223511b.png',
            html: '<img src="https://pic.mos.ru/srv/images/cf9645aaa96d3d15335cb28f6223511b.png" width="192" alt="Записаться" align="left" style="display:block;border:none; width:192px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Подтвердить участие',
            img: 'https://pic.mos.ru/srv/images/5b4958c4aba8bf9ba598b963abf18a8f.png',
            html: '<img src="https://pic.mos.ru/srv/images/5b4958c4aba8bf9ba598b963abf18a8f.png" width="196" alt="Подтвердить участие" align="left" style="display:block;border:none; width:196px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Смотреть материалы',
            img: 'https://pic.mos.ru/srv/images/6c578e8c77ca5fd2fe36cbd06cf43e5c.png',
            html: '<img src="https://pic.mos.ru/srv/images/6c578e8c77ca5fd2fe36cbd06cf43e5c.png" width="186" alt="Участвовать" align="left" style="display:block;border:none; width:186px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Поделиться отзывом',
            img: 'https://pic.mos.ru/srv/images/db5a47d15a90136cb965f95096f47976.png',
            html: '<img src="https://pic.mos.ru/srv/images/db5a47d15a90136cb965f95096f47976.png" width="186" alt="Участвовать" align="left" style="display:block;border:none; width:186px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {   
            name: 'Поделиться мнением',
            img: 'https://pic.mos.ru/srv/images/e445941909208d8b63a03c2b1dea5a79.png',
            html: '<img src="https://pic.mos.ru/srv/images/e445941909208d8b63a03c2b1dea5a79.png" width="192" alt="Узнать новость" align="left" style="display:block;border:0; width:192px; outline:0; text-decoration:none;  height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Перейти к инструкции',
            img: 'https://pic.mos.ru/srv/images/2205434ceb52deaff77199ad8fa0cf72.png',
            html: '<img src="https://pic.mos.ru/srv/images/2205434ceb52deaff77199ad8fa0cf72.png" width="212" alt="Узнать новость" align="left" style="display:block;border:0; width:212px; outline:0; text-decoration:none;  height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {
            name: 'Присоединиться к трансляции',
            img: 'https://pic.mos.ru/srv/images/88cf926053d27e2fc8a886e40196c0a6.png',
            html: '<img src="https://pic.mos.ru/srv/images/88cf926053d27e2fc8a886e40196c0a6.png" width="258" alt="Участвовать" align="left" style="display:block;border:none; width:258px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
        {   
            name: 'Подать заявку на участие',
            img: 'https://pic.mos.ru/srv/images/8f59b5ebbf73d9471de5f030bdbf9319.png',
            html: '<img src="https://pic.mos.ru/srv/images/8f59b5ebbf73d9471de5f030bdbf9319.png" width="234" alt="Участвовать" align="left" style="display:block;border:none; width:234px; outline:0; height:auto; vertical-align:middle;margin:0 auto;">'
        },
    ])
</script>

<template>
    <tr class="email__block">
        <td style="padding:0;">
            
            <!-- Block Actions -->
            <div class="block__actions">
                <div class="handle">
                    <img src="https://pic.mos.ru/srv/images/e0697feb6a49564dd4b25a3c5767c9e3.png" alt="">
                </div>
                <div class="delete__btn" @click="editable = true" style="margin-right: 5px;">
                    <img src="https://pic.mos.ru/srv/images/2b2101003755ca4ff95c055e73a07ee5.png" alt="">
                </div>
                <div class="delete__btn" @click="$emit('deleteBlock')">
                    <img src="https://pic.mos.ru/srv/images/99f341f887108bcc1e76d245175642e1.png" alt="">
                </div>
            </div>
            <!-- End of Block actions -->

            <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="p10px" align="center" style="padding: 13px 42px 0 43px;">

                        <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                                <th class="stretch" width="515" align="center" valign="middle" style="padding:0; vertical-align:top;">

                                    <!-- Button -->
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td align="center" valign="middle" style="padding:0; color: #ff0000; font-size:16px; font-weight:300; font-family:'Helvetica', Arial, 'trebuchet ms', sans-serif; vertical-align:middle;">

                                                <a :href="newLink" v-html="newButton" target="_blank" style="text-decoration:none;border:0;outlines:0;color:#ff0000; font-weight:600; vertical-align:middle"></a>

                                            </td>
                                        </tr>
                                    </table>
                                    <!-- End of Button -->
                                    
                                    <!-- Edit panel -->
                                    <form class="edit__form" v-if="editable" @submit="editable = false, $emit('editButton', newButton), $emit('editLink', newLink)">
                                        <label for="imgSrc">Выберите кнопку</label>
                                        <div style="margin-bottom: 10px;" class="edit__form-inputs btn__img-block">
                                            <div 
                                                class="btn__wrapper" 
                                                v-for="button in buttons"
                                                @click="newButton = button.html"
                                            >
                                                <img :src="button.img" alt="">
                                            </div>
                                        </div>
                                        <label for="link">Cсылка кнопки</label>
                                        <div class="edit__form-inputs">
                                            <input type="text" v-model="newLink" id="link">
                                            <button type="submit"><img src="https://pic.mos.ru/srv/images/306535e23b056fc65524690810704fe0.png" alt="Готово"></button>
                                        </div>
                                    </form>
                                    <!-- End of Edit panel -->

                                </th>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>
        </td>
    </tr> 
</template>

<style scoped lang="scss">
    .btn__img-block {
        display: flex;
        flex-wrap: wrap;
        height: 105px;
        overflow: auto;
    }

    .btn__wrapper {
        width: 32%;
        cursor: pointer;
        margin-right: 5px;
        img {
            width: 100%;
        }
    }
</style>
