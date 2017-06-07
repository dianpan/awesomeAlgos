def quick_sort(arr)
  return arr if arr.length <= 1
  pivot = arr[0]
  left_arr = []
  right_arr = []

  arr.each do |elem|
    if elem < pivot
      left_arr.push(elem)
    else
      right_arr.push(elem)
    end
  end

  p left_arr
  p right_arr

  left = quick_sort(left_arr)
  right = quick_sort(right_arr)
  left.push(pivot)
  left + right
end

array = [21, 4, 1, 3, 9, 20, 25, 6, 21, 14]
p "sorted array: #{quick_sort(array)}"
