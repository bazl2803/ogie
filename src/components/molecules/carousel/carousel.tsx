import clsx from "clsx";
import "./carousel.scss";

interface CarouselProps
    extends React.ComponentPropsWithRef<"div"> {
}

export const Carousel: React.FC<CarouselProps> = (props) => {
    const { className, children, ...rest } = props;

    return (
        <div className={clsx("carousel", className)} {...rest}>
            <div className="carousel__track">
                {children}
            </div>
        </div>
    );
};

interface CarouselItemProps
    extends React.ComponentPropsWithRef<"div"> {
}

export const CarouselItem: React.FC<CarouselItemProps> = (props) => {
    const { className, ...rest } = props;

    return (
        <div className={clsx("carousel__item", className)} {...rest} />
    );
};
