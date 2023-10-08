<template>
    <div class="e_components">
        <div class="e_components__inner">
            <EmailBlocks/>
            <EmailElements/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .e_components {
        width: 30%;
        height: 95vh;
        position: fixed;
        z-index: 10000;
        overflow: hidden;


        background-color: #fff;
        border-radius: 32px;
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);


        &__inner {
            width: 100%;
            height: 100%;
            overflow: auto;
            padding: 30px;
        }
    }
</style>