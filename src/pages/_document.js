import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white">
          <title>babel-plugin-tailwind-dark</title>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument