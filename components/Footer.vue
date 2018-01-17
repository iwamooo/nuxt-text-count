<template lang="pug">
  footer
    .inner
      span &copy; 2018 count
</template>

<style lang="stylus" scoped>
  footer
    margin 32px 0 16px

  .editMode + footer
    display none

  .darkTheme + footer
    color #ccc
</style>
