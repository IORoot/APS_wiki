import React from 'react';
import Layout from '@theme/Layout';
import useFetch from '../components/DownloadFeatures/useFetch';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'


function get_releases() {
  const { data } = useFetch("https://api.github.com/repos/ioroot/housequests-private/releases");
  return data
}

function get_assets(assets) {

    let assetOutput = []

    assets.forEach( function(asset){

      let os = 'Intel MacOS'
      let bg = 'bg-gray-900'
      let fg = 'text-gray-100'
      let icon = '<title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>'
  
      if (asset.name?.match(/exe/)){ 
        os = 'Windows'
        bg = 'bg-sky-400'
        fg = 'text-gray-100'
        icon = '<title>Windows</title><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>'
      }
      if (asset.name?.match(/arm64/)){ 
        os = 'M1 MacOS' 
        bg = 'bg-gray-700'
        fg = 'text-gray-100'
        icon = '<title>macOS</title><path d="M0 14.727h.941v-2.453c0-.484.318-.835.771-.835.439 0 .71.276.71.722v2.566h.915V12.25c0-.48.31-.812.764-.812.46 0 .718.28.718.77v2.518h.94v-2.748c0-.801-.517-1.334-1.307-1.334-.578 0-1.054.31-1.247.805h-.023c-.147-.514-.552-.805-1.118-.805-.545 0-.968.306-1.142.771H.903v-.695H0v4.006zm7.82-.646c-.408 0-.68-.208-.68-.537 0-.318.26-.522.714-.552l.926-.057v.307c0 .483-.427.839-.96.839zm-.284.71c.514 0 1.017-.268 1.248-.703h.018v.639h.908v-2.76c0-.804-.647-1.33-1.64-1.33-1.021 0-1.66.537-1.701 1.285h.873c.06-.332.344-.548.79-.548.464 0 .748.242.748.662v.287l-1.058.06c-.976.061-1.524.488-1.524 1.199 0 .721.564 1.209 1.338 1.209zm6.305-2.642c-.065-.843-.719-1.512-1.777-1.512-1.164 0-1.92.805-1.92 2.087 0 1.3.756 2.082 1.928 2.082 1.005 0 1.697-.59 1.772-1.485h-.888c-.087.453-.397.725-.873.725-.597 0-.982-.483-.982-1.322 0-.824.381-1.323.975-1.323.502 0 .8.321.876.748h.889zm2.906-2.967c-1.591 0-2.589 1.085-2.589 2.82 0 1.735.998 2.816 2.59 2.816 1.586 0 2.584-1.081 2.584-2.816 0-1.735-.997-2.82-2.585-2.82zm0 .832c.971 0 1.591.77 1.591 1.988 0 1.213-.62 1.984-1.59 1.984-.976 0-1.592-.77-1.592-1.984 0-1.217.616-1.988 1.591-1.988zm2.982 3.178c.042 1.006.866 1.626 2.12 1.626 1.32 0 2.151-.65 2.151-1.686 0-.813-.469-1.27-1.576-1.523l-.627-.144c-.67-.158-.945-.37-.945-.733 0-.453.415-.756 1.032-.756.623 0 1.05.306 1.096.817h.93c-.023-.96-.817-1.61-2.019-1.61-1.187 0-2.03.653-2.03 1.62 0 .78.477 1.263 1.482 1.494l.707.166c.688.163.967.39.967.782 0 .454-.457.779-1.115.779-.665 0-1.167-.329-1.228-.832h-.945z"/>'
      }
  
      assetOutput.push(
        <a key={asset.name} href={asset.browser_download_url} className={"p-8 hover:bg-stone-300 rounded-2xl text-center hover:text-black hover:no-underline ease-linear " + bg + " " + fg}>
          <svg className="w-20 h-20 m-8 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{__html: icon}}></svg>
          <div className="text-3xl">{os}</div>
          <div>{asset.name}</div>
        </a>
      );

    })

    return assetOutput
}

function downloadPage() {

  let releases = get_releases()

  let releaseOutput = []

  Array.prototype.forEach.call(releases, function(release){

    let assets = get_assets(release.assets)

    releaseOutput.push(
      <div key={release.id} className={""}>
        <h1 className="text-8xl text-emerald-900">{release.name}</h1>
        <h2 className="text-3xl text-stone-600 dark:text-stone-300">Released on {release.created_at?.split("T")[0]}</h2>
        <ReactMarkdown remarkPlugins={[gfm]} className="text-stone-700 dark:text-stone-400">{release.body}</ReactMarkdown>
        <div className="flex flex-row gap-8 flex-wrap">
          {assets}
        </div>
      </div>
    );

  });


  return (
    <Layout >
      <div className="container py-8 pb-32 flex flex-col gap-40">
          {releaseOutput}
      </div>

    </Layout>
  );

}


export default downloadPage