<script setup lang="ts">
useHead({
  title: '忘記密碼'
})

definePageMeta({
  layout: 'full'
})

const { handleSubmit } = useForm({
  validationSchema: { email: 'required' }
})

const onSubmit = handleSubmit(values => {
  console.log('data', values)
})
</script>

<template>
  <q-page padding class="flex items-center justify-center">
    <q-form @submit="onSubmit">
      <q-card class="card-shadow q-px-sm q-py-md" style="width: 420px">
        <q-card-section class="text-center">
          <q-img src="@images/logo/logo-h.png" class="q-my-md" style="max-width: 300px" />
          <div class="text-h5">忘記密碼</div>
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col-12">
              <TextField label="E-mail" name="email" prepend-icon="o_mail" />
            </div>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn type="submit" color="primary" label="送出" class="w-100" size="lg" />
          <div class="q-mt-md text-body1 text-center w-100">
            已有帳號? <nuxt-link to="/auth/signin" class="text-blue-14">登入</nuxt-link>
          </div>
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>
