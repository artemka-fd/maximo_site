import Card from "../assets/card"

export default function Catalogue() {
    return(
        <div className="cardblock p-24 flex gap-8 justify-center">
            <Card header='Скучньій человек' bgImg={'https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}/>
            <Card header='Вещдок'/>
            <Card header='Чердачная находка'/>
        </div>
    )
}