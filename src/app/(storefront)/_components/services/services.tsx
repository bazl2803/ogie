import {LiaBoxOpenSolid, LiaCreditCardSolid, LiaStoreSolid, LiaTruckSolid} from "react-icons/lia";
import "./services.scss"
import React from "react";

export const Services = () => {
    const services: any[] = [
        {
            icon: LiaTruckSolid,
            title: "Envios a Domicilio",
            description: "Enviamos a todo El Salvador"
        },
        {
            icon: LiaStoreSolid,
            title: "Retiro en Tienda",
            description: "Visita nuestra tienda"
        },
        {
            icon: LiaBoxOpenSolid,
            title: "Productos de Calidad",
            description: "Encuentra los mejores productos"
        },
        {
            icon: LiaCreditCardSolid,
            title: "Pago seguro",
            description: "Realiza tu pago de forma segura"
        }
    ];

    return (
        <section className={"services"}>
            {services.map((service, index: number) => (
                <ServiceCard key={index} service={service}/>
            ))}
        </section>
    )
}

const ServiceCard: React.FC<{
    service: any,
}> = (props) => {
    const {service} = props;
    return (
        <div className={"servicesCard"}>
            <service.icon className={"servicesCard__icon"}/>
            <h3 className={"servicesCard__title"}>{service.title}</h3>
            <p className={"servicesCard__description"}>{service.description}</p>
        </div>
    )
}