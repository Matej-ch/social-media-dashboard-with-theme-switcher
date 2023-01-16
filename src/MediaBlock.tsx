import iconUpSvg from './assets/icon-up.svg'
import iconDownSvg from './assets/icon-down.svg'

function MediaBlock({
                        icon,
                        name,
                        children,
                        increase
                    }: { icon: string, children?: JSX.Element | JSX.Element[], name: string, increase: number }) {
    return (<article>
        <div>
            <img src={icon} alt=""/>
            {name}
        </div>
        {children}
        <span className={increase < 0 ? 'down' : 'up'}>
            <img src={increase < 0 ? iconDownSvg : iconUpSvg}
                 alt={increase < 0 ? 'arrow pointing down' : 'arrow pointing up'}/>{Math.abs(increase)}%
        </span>
    </article>);
}

export default MediaBlock;