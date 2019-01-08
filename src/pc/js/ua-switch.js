'use strict'

const UaSwitch = function () {
  const ua = navigator.userAgent
  const isPc = location.pathname.match('/sp/') === null
  const condition = (ua.indexOf('iPhone') > 0 && ua.indexOf('iPad') === -1) || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0

  if (condition && isPc) {
    const rootRelativePath = location.href.split(location.host)[1]
    const path = rootRelativePath.split('/')
    path.splice(1, 0, 'sp')
    location.href = path.join('/')
  } else if (!condition && !isPc) {
    const path = location.pathname.replace('/sp', '')
    location.href = path
  }
}

UaSwitch()
