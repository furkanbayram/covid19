<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="left col-sm-8">

        </div>
        <div class="right col-sm-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },

  data() {
    return {};
  }
};
</script>

<style>
.content {
  margin-top: 30px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1b262c;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.left{
  height: 90vh;
  max-height: 90vh;
  overflow-y: scroll;
}

.right{
  height: 90vh;
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
