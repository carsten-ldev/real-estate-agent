

type HeadlineRibbonProps = {
 headline: string;
}
export const HeadlineRibbon = ({ headline }: HeadlineRibbonProps) => {
    return ( 
        <div className="headline-ribbon">
            <h1>{headline}</h1>
        </div>
    );
}