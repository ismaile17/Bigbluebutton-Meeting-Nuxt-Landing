<template>
  <a
    class="nav-link dropdown-item dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
  >{{ currentLanguageName }}</a>
  <ul class="dropdown-menu">
    <li
      class="nav-item"
      v-for="(locale, i) in languages"
      :key="i"
      @click="changeLanguage(locale)"
    >
      <span class="dropdown-item cursor-pointer">{{ locale.name }}</span>
    </li>
  </ul>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import { useRouter } from "vue-router";

const { locale, setLocale } = useI18n();
const router = useRouter();

const languages = [
  { code: "tr", name: "TR" },
  { code: "en", name: "EN" },
];

const getLocaleFromStorage = () => {
  if (process.client) {
    return localStorage.getItem("selectedLanguage") || 'en';
  }
  return 'en';
};

const currentLanguageName = computed(() => {
  const currentLocale = languages.find((lang) => lang.code === locale.value);

  if (process.client) {
    const localeData = getLocaleFromStorage();
    if (localeData) {
      locale.value = localeData;
      return languages.find((lang) => lang.code === locale.value)?.name;
    } else {
      return currentLocale ? currentLocale.name : "Language";
    }
  }
  return currentLocale ? currentLocale.name : "Language";
});


const changeLanguage = (newLocale) => {
  const previousLocale = locale.value;
  setLocale(newLocale.code); // ✅ Doğru fonksiyon çağrısı

  if (process.client) {
    localStorage.setItem("selectedLanguage", newLocale.code);

    // URL'i güncelle
    let newPath = router.currentRoute.value.fullPath;
    if (!newPath.startsWith('/en') && !newPath.startsWith('/tr')) {
      newPath = `/${newLocale.code}${newPath}`;
    } else if (newPath.startsWith(`/${previousLocale}`)) {
      newPath = newPath.replace(`/${previousLocale}`, `/${newLocale.code}`);
    }
    router.push({ path: newPath });
  }
};

</script>

<style lang="scss" scoped></style>
