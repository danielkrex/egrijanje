<script setup>
import {RouterView} from 'vue-router'
import { BackToTop, FooterOne, MouseCursor, PreLoader } from './components';


</script>

<template>
<RouterView />
<PreLoader/>
<MouseCursor/>
<BackToTop/>
<FooterOne/>



</template>

