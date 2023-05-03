import useSWR from "swr";
import categoriesService, { CategoryType } from "../../../services/categoriesService";
import ListCategoriesSlide from "../listCategoriesSlide";
import PageSpinner from "../../common/spinner";
// import SwrSpinner from "../../common/swrSpinner";

const ListCategories = function () {
const { data, error } = useSWR("/listCategories", categoriesService.getCategories);

if (error) return error;
if (!data) return <PageSpinner />;

return (
	<>
    {
	  data.data.categories?.map((category: CategoryType) => (
        <ListCategoriesSlide
        key={category.id}
        categoryId={category.id}
        categoryName={category.name}
        />
    ))
    }
	</>
);
}

export default ListCategories