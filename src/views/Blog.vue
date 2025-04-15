<script setup>
import { BreadCrumb, HeaderThree,  } from '@/components';

import axios from 'axios'
import { onMounted, ref} from 'vue'

const blogs = ref([])

onMounted(async () => {
    const { data: fetchedBlogs } = await axios.get('/data/blog.json')
    blogs.value = fetchedBlogs.blogs
})


</script>



<template>
    <HeaderThree/>
    <BreadCrumb/>

    <div class="blog-section gray-bg section-padding">
        <div class="container">            
            <div class="row">                
                <div class="col-xl-4 col-lg-4 col-md-6"
                v-for="blog in blogs.slice(0,9)" :key="blog.id"
                >
                    <router-link :to="{name:'blog-details'}" class="single-blog-item wow fadeInUp" data-wow-delay=".2s">
                        <div class="blog-img">
                            <img :src="blog.img" alt="">
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>{{ blog.cat }}</span>
                            </div>
                            <div class="blog-title">
                                <h4>{{ blog.title }}</h4>
                            </div>
                            <div class="blog-info">
                                <span>{{ blog.dated }}</span>
                                <span>1 comment</span>
                            </div>
                        </div>
                    </router-link>
                </div>
                                               
            </div>
            <div class="row">
                <ul class="pagination d-flex justify-content-center">                                        
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item" aria-current="page"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>                                        
                    <li class="page-item"><a class="page-link" href="#"><i class="las la-angle-right"></i></a></li>                                        
                </ul>
            </div>
        </div>
    </div>
    
</template>

