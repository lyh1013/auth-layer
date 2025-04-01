<script setup lang="ts">
useHead({
  title: '登入'
})

definePageMeta({
  layout: 'full'
})

const isPwdVisible = ref(false)

const { handleSubmit } = useForm({
  validationSchema: { account: 'required', password: 'required' },
  initialValues: {
    account: 'ideaxpress',
    password: 'vpcomponents'
  }
})

function togglePwdVisibility() {
  isPwdVisible.value = !isPwdVisible.value
}

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
          <div class="text-h5">管理員登入</div>
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col-12">
              <TextField label="帳號" name="account" prepend-icon="o_person" />
            </div>

            <div class="col-12">
              <TextField
                :type="isPwdVisible ? 'text' : 'password'"
                label="密碼"
                name="password"
                prepend-icon="o_lock"
                hide-bottom-space
              >
                <template #append>
                  <q-icon
                    :name="isPwdVisible ? 'o_visibility' : 'o_visibility_off'"
                    @click="togglePwdVisibility"
                  />
                </template>
              </TextField>
              <nuxt-link
                to="/auth/forget"
                class="text-right w-100 block text-subtitle1 q-mt-sm text-blue-14"
                >忘記密碼?</nuxt-link
              >
            </div>
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn type="submit" color="primary" label="登入" class="w-100" size="lg" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>
