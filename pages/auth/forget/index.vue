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

const onSubmit = handleSubmit((values: unknown) => {
  console.log('data', values)
})
</script>

<template>
  <q-page padding class="flex items-center justify-center">
    <q-form @submit="onSubmit">
      <q-card class="card-shadow q-px-sm q-py-md" style="max-width: 420px">
        <q-card-section class="flex column items-center justify-center">
          <q-img src="@images/logo/logo-h.png" class="q-my-md" style="max-width: 300px" />
          <div class="text-h5 q-mb-md">忘記密碼</div>
          <p class="text-body1 text-grey-9 w-75">
            輸入您的電子郵件帳號，我們會向您發送重置密碼的連結。
          </p>
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col-12">
              <TextField label="E-mail" name="email" prepend-icon="o_mail" />
            </div>
          </div>
        </q-card-section>

        <q-card-actions class="q-px-md">
          <q-btn type="submit" color="primary" label="送出" class="w-100" size="lg" />
          <div class="q-mt-md text-body1 text-center w-100">
            已有帳號? <nuxt-link to="/auth/signin" class="text-blue-14">登入</nuxt-link>
          </div>
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>
