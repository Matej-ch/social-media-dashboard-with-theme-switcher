import './App.scss'
import OverviewBlock from "./OverviewBlock";
import MediaBlock from "./MediaBlock";
import iconFacebookSvg from './assets/icon-facebook.svg'
import iconTwitterSvg from './assets/icon-twitter.svg'
import iconYoutubeSvg from './assets/icon-youtube.svg'
import iconInstagramSvg from './assets/icon-instagram.svg'

function App() {

    return (
        <main className="App">
            <header>
                <div>
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </div>

                <div>Dark Mode <input type="checkbox"/></div>
            </header>

            <div className={'media-wrapper'}>
                <MediaBlock icon={iconFacebookSvg} name={'@nathanf'} increase={12}><h3>1987</h3><h4>followers</h4>
                </MediaBlock>
                <MediaBlock icon={iconTwitterSvg} name={'@nathanf'} increase={99}><h3>1044</h3><h4>followers</h4>
                </MediaBlock>
                <MediaBlock icon={iconInstagramSvg} name={'@realnathanf'} increase={1099}><h3>11k</h3><h4>followers</h4>
                </MediaBlock>
                <MediaBlock icon={iconYoutubeSvg} name={'Nathan F.'} increase={-144}><h3>8239</h3><h4>subscribers</h4>
                </MediaBlock>
            </div>

            <h2>Overview - Today</h2>
            <div className={'overview-wrapper'}>
                <OverviewBlock title={'Page views'} amount={'87'} increase={3} icon={iconFacebookSvg}></OverviewBlock>
                <OverviewBlock title={'likes'} amount={'52'} increase={-2} icon={iconFacebookSvg}></OverviewBlock>
                <OverviewBlock title={'likes'} amount={'5462'} increase={2257} icon={iconInstagramSvg}></OverviewBlock>
                <OverviewBlock title={'profile views'} amount={'52k'} increase={1375}
                               icon={iconInstagramSvg}></OverviewBlock>
                <OverviewBlock title={'retweets'} amount={'117'} increase={303} icon={iconTwitterSvg}></OverviewBlock>
                <OverviewBlock title={'likes'} amount={'507'} increase={553} icon={iconTwitterSvg}></OverviewBlock>
                <OverviewBlock title={'likes'} amount={'107'} increase={-19} icon={iconInstagramSvg}></OverviewBlock>
                <OverviewBlock title={'total views'} amount={'1407'} increase={-12}
                               icon={iconInstagramSvg}></OverviewBlock>
            </div>

        </main>
    )
}

export default App
