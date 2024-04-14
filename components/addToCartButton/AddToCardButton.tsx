"use client"
import Button from "../button/Button";

const AddToCardButton = () => {
    return (
        <Button
            className="mt-2 w-full !py-3"
            variant= "primary"
            onClick={()=> alert("first")}>
              Add to Card
              </Button>
    );
}

export default AddToCardButton;