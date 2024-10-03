
// import '../../src/app/scss/_plugins.scss';
import '../../src/app/scss/default/_variable.scss';
import '../../src/app/scss/default/_typography.scss';
import '../../src/app/scss/common/_general.scss';
import '../../src/app/scss/common/_slider.scss';
import '../../src/app/scss/common/_video-modal.scss';
import '../../src/app/scss/common/_sidebar.scss';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
