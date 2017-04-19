<template>
    <div id="wrapper">
        <nav class="navbar navbar-default">
            <div class="container">
                <div class="navbar-header">
                    <a class="logo" :href="'#/'"><img src="./assets/logo-inviqa.png"></a>
                </div>
            </div>
        </nav>
        <div class="container">
            <router-view
                class="view"
                keep-alive
                transition
                transition-mode="out-in">
        </div>
    </div>
</template>