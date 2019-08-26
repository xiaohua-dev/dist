import defaultSettings from '@/settings'

const title = defaultSettings.title || 'CMDB系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
