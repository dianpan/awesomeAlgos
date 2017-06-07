def merge(arr, start_index, mid_index, end_index)
  low_half = arr[start_index..mid_index]
  high_half = arr[mid_index+1..end_index]

  low_half_index = 0
  high_half_index = 0
  next_index = start_index

  while low_half_index < low_half.length && high_half_index < high_half.length
    if low_half[low_half_index] <= high_half[high_half_index]
      arr[next_index] = low_half[low_half_index]
      low_half_index += 1
    else
      arr[next_index] = high_half[high_half_index]
      high_half_index += 1
    end
    next_index += 1
  end

  while low_half_index < low_half.length
    arr[next_index] = low_half[low_half_index]
    low_half_index += 1
    next_index += 1
  end

  while high_half_index < high_half.length
    arr[next_index] = high_half[high_half_index]
    high_half_index += 1
    next_index += 1
  end
  arr
end

def merge_sort(arr, start_index, end_index)
  if(start_index < end_index)
    mid_index = (end_index + start_index)/2
    merge_sort(arr, start_index, mid_index)
    merge_sort(arr, mid_index+1, end_index)
    merge(arr, start_index, mid_index, end_index)
  end
end

array = [14, 7, 3, 12, 9, 11, 6, 2];
p merge_sort(array, 0, array.length-1);

array1 = [3,8,0,-3,5];
p merge_sort(array1, 0, array1.length-1);
