

type Props = {
 headline: string;
}
export const HeadlineRibbon = ({ headline }: Props) => {
    return ( 
        <div className="headline-ribbon">
            <h1>{headline}</h1>
        </div>
    );
}