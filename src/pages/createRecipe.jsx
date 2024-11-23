// // import React, { useState } from "react";
// // import axios from "axios";
// // import Navbar from "../components/Navbar.jsx";
// // import { useNavigate } from "react-router-dom";
// // import { useCookies } from "react-cookie";
// // import { Input, Form, Button, Tag, message } from "antd";
// // import createRecipeImg from "../../public/assets/createRecipe.png";
// // import "../styles/createRecipe.css";
// // import UploadWidget from "../components/UploadWidget.jsx";

// // import {useSelector} from "react-redux"
// // import Spinner from "../components/Spinner.jsx";
// // import API_BASE_URL from "../constant.js";

// // const CreateRecipe = () => {
// //   const {currentUser} = useSelector(state => state.user)
// //   const userId = currentUser.data.data.user._id

// //   const navigate = useNavigate();

// //   const [cookies, _] = useCookies(["access_token"]);

// //   const [isLoading, setIsLoading] = useState(false)

// //   const [recipe, setRecipe] = useState({
// //     name: "",
// //     description: "",
// //     ingredients: [],
// //     instructions: "",
// //     recipeImg: "",
// //     cookingTime: 0,
// //     userOwner: userId,
// //   });

// //   const handleChange = (field, value) => {
// //     setRecipe({ ...recipe, [field]: value });
// //   };

// //   const handleIngredientChange = (value, index) => {
// //     const ingredients = [...recipe.ingredients];
// //     ingredients[index] = value;
// //     handleChange("ingredients", ingredients);
// //   };

// //   const handleAddIngredient = () => {
// //     handleChange("ingredients", [...recipe.ingredients, ""]);
// //   };

// //   const handleRemoveIngredient = (index) => {
// //     const ingredients = [...recipe.ingredients];
// //     ingredients.splice(index, 1);
// //     handleChange("ingredients", ingredients);
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       setIsLoading(true)
// //       const requiredFields = ["name", "instructions", "recipeImg"];
// //       if (requiredFields.some((field) => !recipe[field])) {
// //         console.error("Required fields are missing");
// //         return;
// //       }

// //       const resp = await axios.post(
// //         `${API_BASE_URL}/api/v1/recipe/create`,
// //         { ...recipe },
// //         {
// //           headers: { authorization: cookies.access_token },
// //         }
// //       );
// //       console.log("Response:", resp);
// //       setIsLoading(false)
// //       message.success("Recipe Created");
// //       navigate("/");
// //     } catch (error) {
// //       console.error(error);
// //       message.error("Failed to create recipe");
// //     }
// //   };

// //   const handleImageUpload = (imageUrl) => {
// //     handleChange("recipeImg", imageUrl);
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="createRecipeContainer container">
// //         <p className="sectionHeading">Create Recipe</p>
// //         <div className="createRecipe">
// //           <img src={createRecipeImg} alt="" />
// //           <Form onFinish={handleSubmit} className="createRecipeForm">
// //             <Form.Item
// //               name="name"
// //               rules={[{ required: true, message: "Please input the name!" }]}
// //             >
// //               <Input
// //                 placeholder="Name"
// //                 value={recipe.name}
// //                 onChange={(e) => handleChange("name", e.target.value)}
// //               />
// //             </Form.Item>

// //             <Form.Item
// //               name="description"
// //               rules={[
// //                 { required: true, message: "Please input the description!" },
// //               ]}
// //             >
// //               <Input.TextArea
// //                 placeholder="Description"
// //                 value={recipe.description}
// //                 onChange={(e) => handleChange("description", e.target.value)}
// //               />
// //             </Form.Item>

// //             <Form.Item name="ingredients">
// //               <div>
// //                 {recipe.ingredients.map((ingredient, index) => (
// //                   <Tag
// //                     key={index}
// //                     closable
// //                     onClose={() => handleRemoveIngredient(index)}
// //                   >
// //                     <Input
// //                       placeholder={`Ingredient ${index + 1}`}
// //                       value={ingredient}
// //                       onChange={(e) =>
// //                         handleIngredientChange(e.target.value, index)
// //                       }
// //                     />
// //                   </Tag>
// //                 ))}
// //                 <Button
// //                   type="dashed"
// //                   onClick={handleAddIngredient}
// //                   style={{ marginTop: 8 }}
// //                 >
// //                   Add Ingredient
// //                 </Button>
// //               </div>
// //             </Form.Item>

// //             <Form.Item
// //               name="instructions"
// //               rules={[
// //                 { required: true, message: "Please input the instructions!" },
// //               ]}
// //             >
// //               <Input.TextArea
// //                 placeholder="Instructions"
// //                 value={recipe.instructions}
// //                 onChange={(e) => handleChange("instructions", e.target.value)}
// //               />
// //             </Form.Item>

// //             <Form.Item name="recipeImg">
// //               <Input
// //                 placeholder="Image URL"
// //                 disabled
// //                 value={recipe.recipeImg}
// //                 onChange={(e) => handleChange("recipeImg", e.target.value)}
// //               />
// //               <UploadWidget onImageUpload={handleImageUpload} />
// //             </Form.Item>

// //             <Form.Item
// //               name="cookingTime"
// //               rules={[
// //                 { required: true, message: "Please input the cooking time!" },
// //               ]}
// //             >
// //               <Input
// //                 type="number"
// //                 placeholder="Cooking Time (minutes)"
// //                 value={recipe.cookingTime}
// //                 onChange={(e) => handleChange("cookingTime", e.target.value)}
// //               />
// //             </Form.Item>

// //             <Form.Item>
// //               {isLoading ? (
// //                   <Button type="primary" htmlType="submit">
// //                     <Spinner />
// //                   </Button>
// //               ) : (
// //                   <Button type="primary" htmlType="submit">
// //                     Create Recipe
// //                   </Button>
// //               )}
// //             </Form.Item>
// //           </Form>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default CreateRecipe;




// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import { Input, Form, Button, Tag, message, Divider, Typography } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import Navbar from "../components/Navbar.jsx";
// import UploadWidget from "../components/UploadWidget.jsx";
// import { useSelector } from "react-redux";
// import Spinner from "../components/Spinner.jsx";
// import API_BASE_URL from "../constant.js";
// import "../styles/createRecipe.css";

// const { Title } = Typography;

// const CreateRecipe = () => {
//   const { currentUser } = useSelector((state) => state.user);
//   const userId = currentUser.data.data.user._id;

//   const navigate = useNavigate();
//   const [cookies] = useCookies(["access_token"]);
//   const [isLoading, setIsLoading] = useState(false);

//   const [recipe, setRecipe] = useState({
//     name: "",
//     description: "",
//     ingredients: [],
//     instructions: "",
//     recipeImg: "",
//     cookingTime: 0,
//     userOwner: userId,
//   });

//   const handleChange = (field, value) => {
//     setRecipe({ ...recipe, [field]: value });
//   };

//   const handleIngredientChange = (value, index) => {
//     const ingredients = [...recipe.ingredients];
//     ingredients[index] = value;
//     handleChange("ingredients", ingredients);
//   };

//   const handleAddIngredient = () => {
//     handleChange("ingredients", [...recipe.ingredients, ""]);
//   };

//   const handleRemoveIngredient = (index) => {
//     const ingredients = [...recipe.ingredients];
//     ingredients.splice(index, 1);
//     handleChange("ingredients", ingredients);
//   };

//   const handleImageUpload = (imageUrl) => {
//     handleChange("recipeImg", imageUrl);
//   };

//   const handleSubmit = async () => {
//     const requiredFields = ["name", "instructions", "recipeImg", "description"];
//     if (requiredFields.some((field) => !recipe[field])) {
//       message.error("Please fill all required fields.");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       const response = await axios.post(
//         `${API_BASE_URL}/api/v1/recipe/create`,
//         recipe,
//         {
//           headers: { authorization: cookies.access_token },
//         }
//       );
//       setIsLoading(false);
//       message.success("Recipe created successfully!");
//       navigate("/");
//     } catch (error) {
//       setIsLoading(false);
//       console.error(error);
//       message.error("Failed to create the recipe. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="createRecipeContainer container">
//         <Title level={3} className="sectionHeading">
//           Create a New Recipe
//         </Title>
//         <Divider />
//         <div className="createRecipeFormWrapper">
//           <Form
//             onFinish={handleSubmit}
//             layout="vertical"
//             className="createRecipeForm"
//           >
//             <Form.Item
//               label="Recipe Name"
//               rules={[{ required: true, message: "Please enter the recipe name!" }]}
//             >
//               <Input
//                 placeholder="Enter recipe name"
//                 value={recipe.name}
//                 onChange={(e) => handleChange("name", e.target.value)}
//               />
//             </Form.Item>

//             <Form.Item
//               label="Description"
//               rules={[{ required: true, message: "Please enter a description!" }]}
//             >
//               <Input.TextArea
//                 placeholder="Write a short description"
//                 value={recipe.description}
//                 onChange={(e) => handleChange("description", e.target.value)}
//               />
//             </Form.Item>

//             <Form.Item label="Ingredients">
//               <div className="ingredientsSection">
//                 {recipe.ingredients.map((ingredient, index) => (
//                   <Tag
//                     key={index}
//                     closable
//                     onClose={() => handleRemoveIngredient(index)}
//                     className="ingredientTag"
//                   >
//                     <Input
//                       placeholder={`Ingredient ${index + 1}`}
//                       value={ingredient}
//                       onChange={(e) => handleIngredientChange(e.target.value, index)}
//                     />
//                   </Tag>
//                 ))}
//                 <Button
//                   type="dashed"
//                   icon={<PlusOutlined />}
//                   onClick={handleAddIngredient}
//                   style={{ marginTop: 8 }}
//                 >
//                   Add Ingredient
//                 </Button>
//               </div>
//             </Form.Item>

//             <Form.Item
//               label="Instructions"
//               rules={[
//                 { required: true, message: "Please enter the cooking instructions!" },
//               ]}
//             >
//               <Input.TextArea
//                 placeholder="Step-by-step cooking instructions"
//                 value={recipe.instructions}
//                 onChange={(e) => handleChange("instructions", e.target.value)}
//               />
//             </Form.Item>

//             <Form.Item label="Cooking Time (minutes)">
//               <Input
//                 type="number"
//                 placeholder="Enter cooking time in minutes"
//                 value={recipe.cookingTime}
//                 onChange={(e) => handleChange("cookingTime", e.target.value)}
//               />
//             </Form.Item>

//             <Form.Item label="Recipe Image">
//               {recipe.recipeImg && (
//                 <div className="imagePreview">
//                   <img
//                     src={recipe.recipeImg}
//                     alt="Recipe"
//                     className="recipeImage"
//                   />
//                 </div>
//               )}
//               <UploadWidget onImageUpload={handleImageUpload} />
//             </Form.Item>

//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 block
//                 style={{
//                   backgroundColor: "#FFA500",
//                   borderColor: "#FFA500",
//                   color: "#fff",
//                 }}
//                 disabled={isLoading}
//               >
//                 {isLoading ? <Spinner /> : "Create Recipe"}
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateRecipe;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Input, Form, Button, Tag, message, Divider, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Navbar from "../components/Navbar.jsx";
import UploadWidget from "../components/UploadWidget.jsx";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner.jsx";
import API_BASE_URL from "../constant.js";
import "../styles/createRecipe.css";

const { Title } = Typography;

const CreateRecipe = () => {
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser.data.data.user._id;

  const navigate = useNavigate();
  const [cookies] = useCookies(["access_token"]);
  const [isLoading, setIsLoading] = useState(false);

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    recipeImg: "",
    cookingTime: 0,
    userOwner: userId,
  });

  const handleChange = (field, value) => {
    setRecipe({ ...recipe, [field]: value });
  };

  const handleIngredientChange = (value, index) => {
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    handleChange("ingredients", ingredients);
  };

  const handleAddIngredient = () => {
    handleChange("ingredients", [...recipe.ingredients, ""]);
  };

  const handleRemoveIngredient = (index) => {
    const ingredients = [...recipe.ingredients];
    ingredients.splice(index, 1);
    handleChange("ingredients", ingredients);
  };

  const handleImageUpload = (imageUrl) => {
    handleChange("recipeImg", imageUrl);
  };

  const handleSubmit = async () => {
    const requiredFields = ["name", "instructions", "recipeImg", "description"];
    if (requiredFields.some((field) => !recipe[field])) {
      message.error("Please fill all required fields.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/recipe/create`,
        recipe,
        {
          headers: { authorization: cookies.access_token },
        }
      );
      setIsLoading(false);
      message.success("Recipe created successfully!");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      message.error("Failed to create the recipe. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="createRecipeContainer container">
        <Title level={3} className="sectionHeading">
          Create a New Recipe
        </Title>
        <Divider />
        <div className="createRecipeFormWrapper">
          <Form
            onFinish={handleSubmit}
            layout="vertical"
            className="createRecipeForm"
          >
            <Form.Item
              label="Recipe Name"
              rules={[{ required: true, message: "Please enter the recipe name!" }]}>
              <Input
                placeholder="Enter recipe name"
                value={recipe.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Description"
              rules={[{ required: true, message: "Please enter a description!" }]}>
              <Input.TextArea
                placeholder="Write a short description"
                value={recipe.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Ingredients">
              <div className="ingredientsSection">
                {recipe.ingredients.map((ingredient, index) => (
                  <Tag
                    key={index}
                    closable
                    onClose={() => handleRemoveIngredient(index)}
                    className="ingredientTag"
                  >
                    <Input
                      placeholder="Ingredient"
                      value={ingredient}
                      onChange={(e) =>
                        handleIngredientChange(e.target.value, index)
                      }
                    />
                  </Tag>
                ))}
                <Button
                  icon={<PlusOutlined />}
                  className="ant-btn-dashed"
                  onClick={handleAddIngredient}
                >
                  Add Ingredient
                </Button>
              </div>
            </Form.Item>

            <Form.Item
              label="Instructions"
              rules={[{ required: true, message: "Please enter instructions!" }]}>
              <Input.TextArea
                placeholder="Enter instructions"
                value={recipe.instructions}
                onChange={(e) => handleChange("instructions", e.target.value)}
              />
            </Form.Item>

            <Form.Item
              label="Cooking Time (in minutes)"
              rules={[{ required: true, message: "Please enter cooking time!" }]}>
              <Input
                type="number"
                value={recipe.cookingTime}
                onChange={(e) => handleChange("cookingTime", e.target.value)}
                placeholder="Enter cooking time"
              />
            </Form.Item>

            <Form.Item label="Recipe Image">
              <UploadWidget onImageUpload={handleImageUpload} />
              {recipe.recipeImg && (
                <div className="imagePreview">
                  <img
                    src={recipe.recipeImg}
                    alt="Uploaded recipe"
                    className="recipeImage"
                  />
                </div>
              )}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="createRecipeBtn"
                disabled={isLoading}
                block
              >
                {isLoading ? <Spinner /> : "Create Recipe"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
