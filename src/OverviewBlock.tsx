import iconUpSvg from './assets/icon-up.svg'
import iconDownSvg from './assets/icon-down.svg'

function OverviewBlock({
                           title,
                           amount,
                           increase,
                           icon
                       }: { title: string, amount: string, increase: number, icon: string }) {


    return (<article>
        <div className={'title-wrapper'}>{title} <img src={icon} alt=""/></div>
        <div>
            <span className={'amount'}>{amount}</span>
            <span className={increase < 0 ? 'down' : 'up'}>
                <img src={increase < 0 ? iconDownSvg : iconUpSvg}
                     alt={increase < 0 ? 'arrow pointing down' : 'arrow pointing up'}/>{Math.abs(increase)}%
            </span>
        </div>
    </article>);
}

export default OverviewBlock;