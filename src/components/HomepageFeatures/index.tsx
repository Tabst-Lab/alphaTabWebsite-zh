import React from 'react';
import styles from './styles.module.scss';

type FeatureItemImage = string | (() => React.ReactElement);

type FeatureItem = {
  title: string;
  Images: FeatureItemImage | FeatureItemImage[];
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '功能丰富',
    Images: '/img/landing/options.png',
    description: (
      <>
        alphaTab 提供了丰富的功能来构建您的乐谱应用：

        <ul>
          <li>从 Guitar Pro 3-8、MusicXML、Capella 等格式加载乐谱，或使用内置的文本语言 alphaTex。</li>
          <li>显示标准音乐记谱、吉他谱、鼓谱、简谱（jiǎnpǔ）和斜线记谱。</li>
          <li>通过布局（水平/垂直）、缩放级别、自定义边距和着色元素来调整乐谱外观。</li>
          <li>使用内置合成器交互式播放歌曲，包括速度控制、循环、移调。</li>
          <li>将歌曲与真实的音频或视频录音同步。</li>
          <li>显示整首歌曲的单个乐器（音轨），或组合多个音轨。实时控制所有乐器的音量、声像和移调。</li>
        </ul>
      </>
    ),
  },
  {
    title: '响应式显示',
    Images: [
      '/img/landing/alphatab-desktop.png',
      '/img/landing/alphatab-tablet.png',
      '/img/landing/alphatab-phone.png'
    ],
    description: (
      <>
        alphaTab 会根据可用的屏幕分辨率自动调整。调整大小会动态地
        重新排列乐谱以适应可用空间。我们提供了多种
        布局选项来调整缩放、边距和整体排列。
        您的应用会收到任何调整大小的通知，以便您按需调整。这样您可以始终为用户提供最佳的观看体验。
      </>
    ),
  },
  {
    title: '跨平台和全栈设计',
    Images: '/img/landing/platforms.png',
    description: (
      <>
        alphaTab 的核心设计旨在以最少的外部依赖运行，
        并支持多个平台和运行时环境。从一个中央代码库，我们为
        Web 应用（JavaScript）、使用 .NET 的应用以及 Android 的 Kotlin 提供 alphaTab。
        在您的前端和后端使用您喜欢的技术来使用 alphaTab，构建您想要的应用。
      </>
    ),
  },
  {
    title: '音频播放',
    Images: () => {
      return (
        <video src='/img/landing/audio.mp4' autoPlay={true} muted={true} loop={true} controls={false} style={{maxWidth: "100%"}} />
      )
    },
    description: (
      <>
        内置的音频合成器允许用户听到他们所看到的。
        使用 SoundFont2 和 SoundFont3 容器作为输入，alphaTab 可以生成
        与显示乐谱匹配的音频，并提供实时
        显示光标，包括交互式选择播放位置和
        范围。<br />
        或者使用真实的音频和视频录音，并将它们与您的乐谱同步。
        让您的用户跟随伴奏、真实歌曲一起演奏，或构建训练课程。
        alphaTab 可以根据您的需要与任何自定义外部媒体集成。
      </>
    ),
  },
  {
    title: '免费使用',
    Images: '/img/landing/opensource.png',
    description: (
      <>
        alphaTab 根据 MPL-2.0 许可证免费提供给用户。
        自 2010 年以来，它已开发并持续改进了 15 年以上。
        您可以在项目中自由使用，甚至可以为它做出贡献，使其对每个人都更好。
      </>
    ),
  },
];

const FeatureImage: React.FC<{ image: FeatureItemImage }> = ({ image }) => {
  if (typeof image === 'string') {
    return <img src={image} />
  }

  const ImageComponent = image;
  return (
    <ImageComponent />
  )
};

function Feature({ title, Images, description }: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureImageWrap}>{
        Array.isArray(Images)
          ?
          (
            <div className={`${styles.featureImageGallery} ${styles['featureImageGallery' + Images.length]}`}>
              {Images.map(i => <FeatureImage image={i} />)}
            </div>
          )
          : <FeatureImage image={Images} />
      }</div>
      <div className={styles.featureDescription}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
