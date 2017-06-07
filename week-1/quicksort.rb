def quick_sort(arr)
  return arr if arr.length <= 1
  pivot = arr[0]
  left_arr = []
  right_arr = []

  arr.each_with_index do |elem, i|
    next if i == 0
    if elem < pivot
      left_arr.push(elem)
    else
      right_arr.push(elem)
    end
  end

  left = quick_sort(left_arr)
  right = quick_sort(right_arr)
  left.push(pivot)
  left + right
end

array = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
p "sorted array: #{quick_sort(array)}"

array1 = [21, 2]
p "sorted array: #{quick_sort(array1)}"

array2 = [21]
p "sorted array: #{quick_sort(array2)}"

array3 = [-1,3,0,24,-2]
p "sorted array: #{quick_sort(array3)}"
