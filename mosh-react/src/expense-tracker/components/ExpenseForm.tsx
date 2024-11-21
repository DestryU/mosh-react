
import categories from "../categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";




const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  price: z.number({invalid_type_error: "Price is required"}).min(0.01).max(10_000),
  category: z.enum(categories, {
    errorMap: () => ({message: "Category is required"})
  }),
});

type ExpenseFormData = z.infer<typeof schema>;




interface Props {
    onSubmit: (data: ExpenseFormData) => void
}





const ExpenseForm = (props: Props) => {
    const {onSubmit} = props
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit(data => {
        onSubmit(data),
        reset()
    })}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          {...register("price", { valueAsNumber: true })}
          id="price"
          type="number"
          className="form-control"
        />
        {errors.price && <p className="text-danger">{errors.price.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
