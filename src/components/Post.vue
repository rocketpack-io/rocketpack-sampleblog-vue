<template>
    <div class="blog-post">
        <h2 class="blog-post-title">{{title}}</h2>
        <p class="blog-post-meta">{{date}} by <a href="#">{{author}}</a></p>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: ['title', 'date', 'author']
}
</script>
