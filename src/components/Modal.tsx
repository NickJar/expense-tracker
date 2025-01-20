import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

type props = {
  isOpen: boolean;
  closeModal: () => void;
};

function Modal({ isOpen, closeModal }: props) {
  return (
    <div className="absolute mx-auto left-0 right-0 w-[500px] h-[500px]">
      {isOpen ? (
        <Card className="bg-white w-full h-full relative">
          <CardHeader>
            <CardTitle>Add Expense</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="absolute top-2 right-4 font-bold hover:cursor-pointer"
              onClick={closeModal}
            >
              X
            </div>
          </CardContent>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
}

export default Modal;
